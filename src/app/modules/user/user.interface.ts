export type TUser = {
  name: string;
  email: string;
  image: string;
  password?: string;
  phone?: string;
  role: "user" | "admin";
};
