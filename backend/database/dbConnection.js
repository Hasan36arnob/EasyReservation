import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Optional but recommended
      useUnifiedTopology: true, // Optional but recommended
    })
    .then(() => {
      console.log("Connected to local MongoDB database!");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to the local database: ${err}`);
    });
};
