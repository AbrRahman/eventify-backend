import express from "express";
const router = express.Router();
import userRouter from "../modules/user/user.routes";
import authRouter from "../modules/auth/auth.routes";
const moduleRouter = [
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/user",
    route: authRouter,
  },
];

moduleRouter.forEach(({ path, route }) => router.use(path, route));

export default router;
