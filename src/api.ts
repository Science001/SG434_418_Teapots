import express from "express";
import jwt from "jsonwebtoken";
const api = express.Router();

// Body Parser ---------------------------------------------
import bodyParser from "body-parser";
import user from "./routers/user.route";
import auth from "./routers/auth.route";
import teacher from "./routers/teacher.route";
import school from "./routers/school.route";

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
api.use("/school", school);

api.use("/", (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET_KEY as string, (err, payload: Payload) => {
    if (err) {
      console.log(err);
      res.sendStatus(403);
      return
    }
    req.user = payload;
  });
  next();
});

api.use("/user", user);
api.use("/teacher", teacher);

// ------------------------------------------------------------

export default api;
