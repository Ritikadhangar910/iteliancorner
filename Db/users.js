const mongoose = require("mongoose");
const proSchema = new mongoose.Schema({
  name: String,
  mobileNo: Number,
  Address: String,
});
const proModel = mongoose.model("users", proSchema);
module.exports = proModel;
