import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL: string = process.env.DATABASE_URL!;

export const dbConfig = () => {
  try {
    return connect(URL)
      .then(() => {
        console.log("database connected...");
      })
      .catch(() => console.error());
  } catch (error) {
    return error;
  }
};