import { Types } from "mongoose";

type TBooking = {
  user: Types.ObjectId;
  event: Types.ObjectId;
  ticket: number;
  phone: string;
  paymentMethod: string;
  paymentStatus: "paid" | "unpaid";
};

export default TBooking;
