const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const multer = require("./src/middlewares/multer.js");
const { uuid } = require("uuidv4");
const cors = require("cors");
const initializePassport = require("./src/controllers/Passport/passport.js");
const cacheTime = 86400000; // 1 día en milisegundos
app.use(express.static(path.join(__dirname, "public"), { maxAge: cacheTime }));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(multer);
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    headers: ["Content-Type", "Authorization"],
  })
);
initializePassport(passport);
const index = require("./src/routes/Index.routes.js");
app.use(index);
const user = require("./src/routes/user.routes.js");
app.use(user);
const admreq = require("./src/routes/admreq.routes.js");
app.use(admreq);
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`estan en el pueto ${port} = > http://localhost:${port}/`);
});
