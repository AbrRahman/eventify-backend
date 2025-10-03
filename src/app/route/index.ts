import express from "express";
const router = express.Router();
import userRouter from "../modules/user/user.routes";
import authRouter from "../modules/auth/auth.routes";
import eventRouter from "../modules/event/event.routes";
import reviewRouter from "../modules/review/review.routes";
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
  {
    path: "/review",
    route: reviewRouter,
  },
];

moduleRouter.forEach(({ path, route }) => router.use(path, route));

export default router;
