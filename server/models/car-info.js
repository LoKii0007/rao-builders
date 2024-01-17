const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image:{
    type : String
  },
  product: {
    type: String,
    required: true,
  }
});

const car = mongoose.model("car-info", carSchema);

module.exports = car;

