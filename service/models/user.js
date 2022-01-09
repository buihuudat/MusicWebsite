import express from "express";
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const User = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
}, {timestamps: true})

module.exports = mongoose.model('users', User);