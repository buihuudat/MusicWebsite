import express from "express";
import { getVideos, createVideo } from "../controllers/video.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

const router = express.Router();

router.post('/register', async (req, res) => {
  const {username, password} = req.body;

  if (!username || !password)
  return res.status(400).json({success: false, message: 'Missing username or password'})

  try {
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({success: false, message: "Username already taken!"});
    }

    const hashedPassword = await argon2.hash(password);
    const newUser = new User({ username, password: hashedPassword});
    await newUser.save();

    const accessToken = jwt.sign({userId: newUser._id}, );
  } catch (error) {
    
  }
})

router.get('/videos', getVideos);
router.post('/', createVideo);

export default router;
