import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";

import videos from "./routers/vidoes.js";

const URL = "mongodb+srv://MusicWebsite:wNMhKQm8UrQU7vXB@cluster0.zjmip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const app = express();
const PORT = process.env.port || 5000;

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/videos', videos);

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    })
  }).catch((err) => {
    console.log("error!!", err);
  });

