const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const surgicalinventorySchema = new Schema(
  {
    name: String,
    quantity: String,
    from: String,
    balance: String,
    date: String,
  },
);

const Surgicalinventory = mongoose.model("surgicalinventory", surgicalinventorySchema);
module.exports = Surgicalinventory;
