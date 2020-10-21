const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const generalinventorySchema = new Schema(
  {
    name: String,
    quantity: String,
    from: String,
    balance: String,
    date: String,
  },
);

const Generalinventory = mongoose.model("generalinventory", generalinventorySchema);
module.exports = Generalinventory;
