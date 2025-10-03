import mongoose, { Schema } from "mongoose";
import TBooking from "./booking.interface";

const bookingSchema = new Schema<TBooking>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "user",
    },
    event: {
      type: Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "event",
    },
    ticket: {
      type: Number,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    paymentMethod: {
      type: String,
      trim: true,
      default: "",
    },
    paymentStatus: {
      type: String,
      trim: true,
      default: "unpaid",
    },
  },
  { timestamps: true }
);

const BookingModel = mongoose.model<TBooking>("booking", bookingSchema);

export default BookingModel;
