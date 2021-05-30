import dotenv from "dotenv";
import mongoose from 'mongoose';
import app from "./server.js";

// this to make env file works
dotenv.config()

const port = process.env.PORT || 8000


// Connecting to the DB
mongoose.connect(process.env.RESTREVIEWS_DB_URI, {
  useNewUrlParser: true
}, () => {
  console.log("connected to DB");
  // listen to request after connecting to the DB
  app.listen(port)
})

