import { uploadImageCloudinary } from "../../utils/handleImageUpload";
import { TUser } from "./user.interface";
import UserModel from "./user.model";

const createUserIntoDb = async (payload: Partial<TUser>, file: any) => {
  let newUser;

  if (file?.path && file?.fieldname) {
    // upload into cloudinary
    const upload_url = await uploadImageCloudinary(file?.buffer);
    const secure_url = upload_url?.secure_url as string;

    newUser = new UserModel({
      ...payload,
      image: secure_url,
    });
  } else {
    newUser = new UserModel({
      ...payload,
    });
  }

  const result = await newUser.save();
  return result;
};

const userService = {
  createUserIntoDb,
};
export default userService;
