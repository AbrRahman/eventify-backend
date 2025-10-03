import z from "zod";

const createBookingValidationSchema = z.object({
  body: z.object({
    user: z.string().min(1, { message: "User id must be required" }),
    event: z.string().min(1, { message: "Event id must be required" }),
    ticket: z.string().min(1, { message: "Ticket must be required" }),
    phone: z.string().min(1, { message: "Phone number is required" }),
    paymentMethod: z.string().optional(),
  }),
});

const bookingValidation = {
  createBookingValidationSchema,
};
export default bookingValidation;
