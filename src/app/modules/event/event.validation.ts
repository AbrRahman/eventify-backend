import z from "zod";

const createEventValidationSchema = z.object({
  body: z.object({
    title: z.string().trim().min(1, "Event title is required"),
    category: z.string().trim().min(1, "Event category is required"),
    description: z.string().trim().min(1, "Description is required"),
    date: z.string().trim().min(1, "Date is required"),
    location: z.string().trim().min(1, "Location is required"),
    seats: z.string().trim().min(1, "Sets is required"),
    price: z.string().trim().min(1, "Price is required"),
    organizer: z.string().trim().min(1, "Organizer name is required"),
  }),
});
const updateEventValidationSchema = z.object({
  body: z.object({
    title: z.string().trim().optional(),
    category: z.string().trim().optional(),
    description: z.string().trim().optional(),
    date: z.string().trim().optional(),
    location: z.string().trim().optional(),
    seats: z.string().trim().optional(),
    price: z.string().trim().optional(),
    organizer: z.string().trim().optional(),
  }),
});

const eventValidation = {
  createEventValidationSchema,
  updateEventValidationSchema,
};
export default eventValidation;
