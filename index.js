const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const multer = require("multer");
const { uuid } = require("uuidv4");
const cors = require("cors");
const initializePassport = require("./src/controllers/Passport/passport.js");
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, uuid() + path.extname(file.originalname));
  },
  destination: path.join(__dirname, "../public/uploads"),
});
app.use(cors());
app.use("/assets", express.static("public"));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  multer({
    storage,
    dest: path.join(__dirname, "../public/uploads"),
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
  }).single("image")
);
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
initializePassport(passport);
const Admin = require("./src/routes/Admin.routes.js");
app.use(Admin);
const index = require("./src/routes/Index.routes.js");
app.use(index);
const user = require("./src/routes/user.routes.js");
app.use(user);
const admreq = require("./src/routes/admreq.routes.js");
app.use(admreq);
app.listen(process.env.PORT);
