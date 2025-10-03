import TBooking from "./booking.interface";
import BookingModel from "./booking.model";
import EventModel from "../event/event.model";

// booking a event set
const insertBookingIntoDB = async (payload: Partial<TBooking>) => {
  const result = await BookingModel.create(payload);
  const event = await EventModel.findById(payload.event);
  if (event && payload?.ticket) {
    event.seats -= payload.ticket;
  }

  return result;
};

// get get user all booking
const getUserAllBookingFromDB = async (userId: string) => {
  const result = await BookingModel.find({ user: userId })
    .populate("user")
    .populate("event");
  return result;
};

// cancel a booking by user
const deleteBookingIntoDB = async (id: string) => {
  const result = await BookingModel.findByIdAndDelete(id);
  const event = await EventModel.findById(result?.event);
  if (event && result?.ticket) {
    event.seats += result?.ticket;
  }
  await event?.save();
  return result;
};

const bookingService = {
  insertBookingIntoDB,
  getUserAllBookingFromDB,
  deleteBookingIntoDB,
};
export default bookingService;
