import express from "express";
import { upload } from "../../utils/handleImageUpload";
import validationRequest from "../../middleware/validationRequest";
import auth from "../../middleware/auth";
import eventValidation from "./event.validation";
import eventController from "./event.controller";

const router = express.Router();

// create event into db
router.post(
  "/",
  auth("admin"),
  upload.single("file"),
  validationRequest(eventValidation.createEventValidationSchema),
  eventController.createEvent
);
// get all event
router.get("/", eventController.getAllEvent);
// get single event
router.get("/:id", eventController.getSingleEvent);

// update event
router.patch(
  "/:id",
  auth("admin"),
  upload.single("file"),
  validationRequest(eventValidation.updateEventValidationSchema),
  eventController.updateEvent
);

// delete delete Event
router.delete("/:id", auth("admin"), eventController.deleteEvent);

const eventRouter = router;
export default eventRouter;
