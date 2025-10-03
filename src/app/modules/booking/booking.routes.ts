import express from "express";
import bookingController from "./booking.controller";
import auth from "../../middleware/auth";

const router = express.Router();

// booking router
router.post("/", auth("admin", "user"), bookingController.insertBooking);

// get login uer booking and upcoming booking
router.get(
  "/my-booking",
  auth("admin", "user"),
  bookingController.getUserAllBooking
);

// delete a booking by admin
router.delete("/:id", auth("admin", "user"), bookingController.deleteBooking);

const bookingRouter = router;
export default bookingRouter;
