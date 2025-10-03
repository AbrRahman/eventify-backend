import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import bookingService from "./booking.service";

// create booking controller
const insertBooking = catchAsync(async (req, res, next) => {
  const result = await bookingService.insertBookingIntoDB(req?.body);
  let success = true;
  let message = "Successfully Booking";
  if (!result) {
    (success = false), (message = "Booking failed");
  }
  res.status(status.OK).json({
    success: success,
    message: message,
    data: result,
  });
});

const getUserAllBooking = catchAsync(async (req, res, next) => {
  const userId = req?.user?._id;
  const result = await bookingService.getUserAllBookingFromDB(userId);

  let success = true;
  let message = "Get my booking booking successfully";
  if (!result?.length) {
    success = false;
    message = "Get my booking Failed";
  }
  res.status(status.OK).json({
    success,
    message,
    data: result,
  });
});

// delete a booking by admin
const deleteBooking = catchAsync(async (req, res, next) => {
  const id = req?.params?.id as string;
  const result = await bookingService.deleteBookingIntoDB(id);
  res.status(status.OK).json({
    success: true,
    message: "Delete a booking successfully",
  });
});

const bookingController = {
  insertBooking,
  getUserAllBooking,
  deleteBooking,
};
export default bookingController;
