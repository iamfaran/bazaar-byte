import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

// below line is used to use environment variables from .env file
dotenv.config();

// below code is used to configure cloudinary with the cloud_name, api_key and api_secret
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
