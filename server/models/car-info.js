const mongoose = require("mongoose");

const productTypeSchema = new mongoose.Schema({
  image:{
    type : String
  },
  product: {
    type: String,
    required: true,
  }
});

const productType = mongoose.model("product-type", productTypeSchema);

module.exports = productType;

