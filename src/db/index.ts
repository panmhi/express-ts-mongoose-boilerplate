import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/note-app")
  .then(() => {
    console.log("DB connected!");
  })
  .catch((err) => {
    console.log(err);
  });
