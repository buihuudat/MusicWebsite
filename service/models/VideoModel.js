import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
import MongooseDelete from "mongoose-delete";

const schema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String},
  image: {type: String},
  VideoID: {type: String},
  slug: {type: String, slug: 'name', unique: true},
}, {
  timestamps: true,
});

mongoose.plugin(slug);
schema.plugin(MongooseDelete, {
  deleteAt: true,
  overrideMethods: "all",
});

export const VideoModel = mongoose.model("Video", schema);
