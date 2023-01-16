const mongoose = require("mongoose");
const proSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
});
const proModel = mongoose.model("products", proSchema);
module.exports = proModel;
