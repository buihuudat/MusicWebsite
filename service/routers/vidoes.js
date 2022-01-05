import express from "express";
import { getVideos, createVideo } from "../controllers/video.js";

const router = express.Router();

router.get('/', getVideos)
router.post('/', createVideo)

export default router;
