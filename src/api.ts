import express from "express";
import jwt from "jsonwebtoken";
const api = express.Router();

// Body Parser ---------------------------------------------
import bodyParser from "body-parser";
import user from "./routers/user.route";
import auth from "./routers/auth.route";

api.use(bodyParser.json());
// ------------------------------------------------------------

// Code Starts here -------------------------------------------

api.get("/", (_req, res) => {
  res.send("Welcome to /api");
});

api.use("/", (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  // tslint:disable-next-line: no-shadowed-variable
  jwt.verify(token, process.env.SECRET_KEY as string, (err: any, user: any) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
  });
  next();
});

api.use("/user", user);
api.use("/auth", auth);

// ------------------------------------------------------------

export default api;
