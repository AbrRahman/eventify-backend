import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import config from "../config";

import streamifier from "streamifier";
// Configuration
cloudinary.config({
  cloud_name: config.cloudinary_cloud_name!,
  api_key: config.cloudinary_api_key!,
  api_secret: config.cloudinary_api_secret!,
});

interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
}

export const uploadImageCloudinary = (
  fileBuffer: Buffer
): Promise<CloudinaryUploadResult> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
      if (result) {
        resolve({
          public_id: result?.public_id!,
          secure_url: result?.secure_url!,
        });
      } else {
        reject(error);
      }
    });
    streamifier.createReadStream(fileBuffer).pipe(uploadStream);
  });
};

const storage = multer.memoryStorage();

const fileFilter = (req: any, file: Express.Multer.File, cb: any) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"));
  }
};

export const upload = multer({ storage: storage, fileFilter });
