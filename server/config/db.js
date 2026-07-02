import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is connected!");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
