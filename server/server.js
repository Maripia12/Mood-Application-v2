// const express = require("express");
// const mongoose = require("mongoose");

// const logger = require("morgan");
// //const url = "mongodb://localhost/workout";
// const db = require("./config/config").get(process.env.NODE_ENV);

// const routes = require("./routes/user");
// const User = require("./models/user");
// const { auth } = require("./middleware/auth");

// const db = require("./config/config");

// const app = express();

// app.use(logger("dev"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));

// mongoose.Promise = global.Promise;
// mongoose.connect(
//   db.DATABASE,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   function (err) {
//     if (err) console.log(err);
//     console.log("database is connected");
//   }
// );

// //app.use(require("./routes/api.js"));
// app.use(routes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log("App running on port " + PORT);
// });
//// hello

const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
//const url = "mongodb://localhost/workout";
const db = require("./config/config").get(process.env.NODE_ENV);
const routes = require("./routes/user");
const User = require("./models/user");
const { auth } = require("./middleware/auth");
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.Promise = global.Promise;
mongoose.connect(
  db.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) console.log(err);
    console.log("database is connected");
  }
);
//app.use(require("./routes/api.js"));
app.use(routes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App running on port " + PORT);
});
