require('dotenv').config();
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";

import auth from "./routers/auth.js";

const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@musicwebsite.lg4au.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();
const PORT = process.env.port || 5000;

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());
app.use('/', auth);

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    })
  }).catch((err) => {
    console.log("error!!", err);
  });

