import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import eventService from "./event.service";

// insert event controller
const createEvent = catchAsync(async (req, res, next) => {
  const result = await eventService.insertEventIntoDB(req?.body, req?.file);

  res.status(status.OK).json({
    success: true,
    message: "Event create successfully",
    data: result,
  });
});

// get all event controller
const getAllEvent = catchAsync(async (req, res, next) => {
  const result = await eventService.getAllEventFromDB(req?.query);
  res.status(status.OK).json({
    success: true,
    message: "Get all event successfully",
    data: result,
  });
});

// get single event controller
const getSingleEvent = catchAsync(async (req, res, next) => {
  const eventId = req?.params?.id as string;
  const result = await eventService.getSingleEventFromDB(eventId);
  res.status(status.OK).json({
    success: true,
    message: "Get event successfully",
    data: result,
  });
});

// update event controller
const updateEvent = catchAsync(async (req, res, next) => {
  const eventId = req?.params?.id as string;
  const result = await eventService.updateEventIntoDB(
    req?.body,
    eventId,
    req?.file
  );
  res.status(status.OK).json({
    success: true,
    message: "Update event successfully",
    data: result,
  });
});

// soft delete event controller
const deleteEvent = catchAsync(async (req, res, next) => {
  const eventId = req?.params?.id as string;
  const result = await eventService.deleteEventIntoB(eventId);
  res.status(status.OK).json({
    success: true,
    message: "Event delete successfully",
    data: result,
  });
});

const eventController = {
  createEvent,
  getAllEvent,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};
export default eventController;
