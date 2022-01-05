import { VideoModel } from "../models/VideoModel.js";

export const getVideos = async (req, res) => {
  try {
    const videos = await VideoModel.find();
    res.json(videos);
  } catch (error) {
    res.json({error: err});
  }
};

export const createVideo = (req, res) => {
  res.send("Dat")
}