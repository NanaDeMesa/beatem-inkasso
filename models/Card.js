const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  creditorName: {
    type: String,
    required: true,
    get: value => value.toUpperCase()
  },
  amountValue: String,
  dueDateValue: String
});

module.exports = mongoose.model("Card", cardSchema);
