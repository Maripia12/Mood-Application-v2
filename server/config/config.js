// const config = {
//   // production :{
//   //     SECRET: process.env.SECRET,
//   //     DATABASE: process.env.MONGODB_URI
//   // },
//   default: {
//     SECRET: "mysecretkey",
//     DATABASE: "mongodb://localhost/users",
//   },
// };

// exports.get = function get(env) {
//   return config[env] || config.default;
// };

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mood-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
