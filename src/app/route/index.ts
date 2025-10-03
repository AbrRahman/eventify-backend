import express from "express";
const router = express.Router();
import userRouter from "../modules/user/user.routes";
const moduleRouter = [
  {
    path: "/user",
    route: userRouter,
  },
];

moduleRouter.forEach(({ path, route }) => router.use(path, route));

export default router;
