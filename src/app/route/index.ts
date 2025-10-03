import express from "express";
const router = express.Router();
import userRouter from "../modules/user/user.routes";
import authRouter from "../modules/auth/auth.routes";
import eventRouter from "../modules/event/event.routes";
const moduleRouter = [
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/event",
    route: eventRouter,
  },
];

moduleRouter.forEach(({ path, route }) => router.use(path, route));

export default router;
