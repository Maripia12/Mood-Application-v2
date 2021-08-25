const db = require("../models");
const mongoose = require("mongoose");
const moodData = require("./moodData.json");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Mood-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
db.Mood.deleteMany({})
  .then(() => db.Mood.collection.insertMany(moodData))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  });

// beforeEach(async () => {
//   await Mood.create(mood);
// });

// console.log("all done!");
// process.exit(0);
