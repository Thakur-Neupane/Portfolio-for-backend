import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    conn && console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
export default dbConnection;
