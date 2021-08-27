const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moodSchema = new Schema({
  moodtype: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  quote: {
    type: String,
    required: true,
  },
});

const Mood = mongoose.model("Mood", moodSchema);

module.exports = Mood;
