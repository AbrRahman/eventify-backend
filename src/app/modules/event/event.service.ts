import { uploadImageCloudinary } from "../../utils/handleImageUpload";
import TEvent from "./event.interface";
import EventModel from "./event.model";

// create event
const insertEventIntoDB = async (payload: Partial<TEvent>, file: any) => {
  // upload into cloudinary
  const upload_url = await uploadImageCloudinary(file?.buffer);
  const secure_url = upload_url?.secure_url as string;
  let newService = new EventModel({
    ...payload,
    image: secure_url,
  });
  const result = await newService.save();
  return result;
};

// get all event
const getAllEventFromDB = async (query: Record<string, unknown>) => {
  let searchTerm = "";
  if (query?.searchTerm) {
    searchTerm = query.searchTerm as string;
  }

  const searchableFiled = ["title", "category"];
  const result = await EventModel.find({
    $or: searchableFiled.map((filed) => ({
      [filed]: { $regex: searchTerm, $options: "i" },
    })),
  });

  return result;
};

// get single event
const getSingleEventFromDB = async (eventId: string) => {
  const result = await EventModel.findById(eventId);
  return result;
};

// update event into db
const updateEventIntoDB = async (
  payload: Partial<TEvent>,
  eventId: string,
  file: any
) => {
  let newPayload = payload;
  if (file?.path && file?.fieldname) {
    // upload into cloudinary
    const upload_url = await uploadImageCloudinary(file?.buffer);
    const secure_url = upload_url?.secure_url as string;
    newPayload = {
      image: secure_url,
      ...payload,
    };
  }
  const result = await EventModel.findByIdAndUpdate(eventId, newPayload, {
    runValidators: true,
    new: true,
  });
  return result;
};

const deleteEventIntoB = async (eventId: string) => {
  const result = await EventModel.findByIdAndDelete(eventId);

  return result;
};

const eventService = {
  insertEventIntoDB,
  getAllEventFromDB,
  getSingleEventFromDB,
  updateEventIntoDB,
  deleteEventIntoB,
};

export default eventService;
