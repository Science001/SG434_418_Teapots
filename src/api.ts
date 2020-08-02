import express from "express";
import jwt from "jsonwebtoken";
const api = express.Router();

// Body Parser ---------------------------------------------
import bodyParser from "body-parser";
import user from "./routers/user.route";
import auth from "./routers/auth.route";
import teacher from "./routers/teacher.route";
import school from "./routers/school.route";
import student from "./routers/student.route";
import exam from "./routers/exam.route";
import result from "./routers/result.route";
import common from "./routers/common.route";

api.use(bodyParser.json());
// ------------------------------------------------------------

interface Payload {
  id: string;
  email: string;
  role: string;
  schoolId?: string;
}

// Code Starts here -------------------------------------------

api.get("/", (_req, res) => {
  res.send("Welcome to /api");
});

api.use("/auth", auth);

api.use("/", (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    res.sendStatus(401);
    return;
  }
  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    (err, payload: Payload) => {
      if (err) {
        console.log(err);
        res.sendStatus(403);
      } else {
        req.user = payload;
        next();
      }
    }
  );
});

api.use("/student", student);
api.use("/common", common);
api.use("/exam", exam);
api.use("/result", result);
api.use("/teacher", teacher);
api.use("/user", user);
api.use("/school", school);

// ------------------------------------------------------------

export default api;
