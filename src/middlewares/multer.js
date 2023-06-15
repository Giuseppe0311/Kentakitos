/* eslint-disable linebreak-style */
const multerS3 = require("multer-s3-v2");
const multer = require("multer");
const { uuid } = require("uuidv4");
const path = require("path");
const { s3 } = require("../services/awts3.js");
const dotenv = require("dotenv");
dotenv.config();
const storage = multerS3({
  s3: s3,
  bucket: process.env.AWS_BUCKET_NAME,
  metadata: function (req, file, cb) {
    cb(null, { originalname: file.originalname });
  },
  key: function (req, file, cb) {
    cb(null, uuid() + path.extname(file.originalname));
  },
});
module.exports = multer({
  storage,
  limits: { fieldSize: 5000000 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpg|jpeg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const exname = filetypes.test(path.extname(file.originalname));
    if (mimetype && exname) {
      return cb(null, true);
    }
    cb("Error: Archivo debe ser una imagen valida");
  },
}).any();
