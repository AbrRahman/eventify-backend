import mongoose, { Schema } from "mongoose";
import TEvent from "./event.interface";

const eventSchema = new Schema<TEvent>(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    category: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    date: {
      type: String,
      require: true,
      trim: true,
    },
    location: {
      type: String,
      require: true,
      trim: true,
    },
    seats: {
      type: Number,
      require: true,
      trim: true,
    },
    price: {
      type: Number,
      require: true,
      trim: true,
    },

    image: {
      type: String,
      require: true,
      trim: true,
    },
    organizer: {
      type: String,
      require: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const EventModel = mongoose.model<TEvent>("service", eventSchema);

export default EventModel;
