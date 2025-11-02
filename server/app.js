import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import clientRouter from "./routers/clientRouter.js";

const app = express();


dotenv.config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Hello from SVB Server");
});


app.use("/", clientRouter);


mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected Successfully...");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err.message);
  });
