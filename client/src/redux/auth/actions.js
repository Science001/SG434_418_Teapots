import axiosInstance from "../../utils/axiosInstance";
import {
  SET_LOGIN_PROCESS_ON,
  LOGIN_USER,
  LOGIN_ERR,
  LOGOUT_USER,
  DB_POPULATED,
} from "./reducer";
const electron = window.require("electron");
const typeorm = electron.remote.require("typeorm");

export const setLoginProcessOn = () => {
  return {
    type: SET_LOGIN_PROCESS_ON,
  };
};

export const loginUser = (userObj) => {
  return {
    type: LOGIN_USER,
    payload: userObj,
  };
};

export const loginErr = () => {
  return {
    type: LOGIN_ERR,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const dbPopulated = () => {
  return {
    type: DB_POPULATED,
  };
};

export const whoami = () => {
  return (dispatch) => {
    const token = localStorage.token;
    if (token) {
      axiosInstance
        .get(`/user/me`)
        .then((res) => {
          dispatch(loginUser(res.data.user));
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response);
            if (err.response.data.code === 401) {
              localStorage.removeItem("token");
            }
          }
          dispatch(loginUser(null));
        });
    } else {
      dispatch(loginUser(null));
    }
  };
};

export const getDbEntities = (user) => {
  return async (dispatch) => {
    try {
      await axiosInstance.get("/user").then(async (res) => {
        const { users } = res.data;
        await typeorm.getRepository("user").save(users);
        console.log("Populated user")
      });
      await axiosInstance.get("/common/grades").then(async (res) => {
        const { grades } = res.data;
        await typeorm.getRepository("grade").save(grades);
        console.log("Populated grade")
      });
      await axiosInstance.get("/common/subjects").then(async (res) => {
        const { subjects } = res.data;
        await typeorm.getRepository("subject").save(subjects);
        console.log("Populated subject")
      });
      await axiosInstance.get("/common/location").then(async (res) => {
        const { locations } = res.data;
        await typeorm.getRepository("location").save(locations);
        console.log("Populated location")
      });
      await axiosInstance.get("/school").then(async (res) => {
        const { schools } = res.data;
        await typeorm.getRepository("school").save(schools);
        console.log("Populated school")
      });
      await axiosInstance.get("/teacher").then(async (res) => {
        const { postings } = res.data;
        await typeorm.getRepository("posting").save(postings);
        console.log("Populated posting")
      });
      await axiosInstance.get("/student").then(async (res) => {
        const { academics } = res.data;
        await typeorm.getRepository("academic").save(academics);
        console.log("Populated academic")
      });
      await axiosInstance.get("/exam").then(async (res) => {
        const { exams } = res.data;
        await typeorm.getRepository("exam").save(exams);
        console.log("Populated exam")
      });
      await axiosInstance.get("/result").then(async (res) => {
        const { results } = res.data;
        await typeorm.getRepository("result").save(results);
        console.log("Populated result")
      });
      console.log("DB ALL DONE")
      // new Notification('Database Populated', {
      //   body: 'Your application is now ready to work offline'
      // })
      dispatch(dbPopulated());
    }
    catch (err) {
      console.error("Something messed up while populating entites", err)
    }
  };
};

export const loginAction = (body) => {
  return (dispatch) => {
    dispatch(setLoginProcessOn());
    axiosInstance
      .post("/auth/login", body)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("token", res.data.token);
          console.log(res.data);
          dispatch(loginUser(res.data));
          dispatch(getDbEntities(res.data.user));
        }
      })
      .catch((err) => {
        if (err.response) {
          dispatch(loginErr());
        }
      });
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
  };
};
