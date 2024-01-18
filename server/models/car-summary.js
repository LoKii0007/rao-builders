const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  car_id: {
    type: String,
    required: true,
  },
  prod_name: {
    type: String,
  },
  quality: {
    type: String,
  },
  size: {
    type: String,
  },
  brand: {
    type: String,
  },
  thickness: {
    type: String,
  },
  minimum_order: {
    type: String,
  },
  quantity: {
    type: String,
  },
  type: {
    type: String,
  },
  quality: {
    type: String,
  },
  source: {
    type: String,
  },
  price: {
    type: String,
  },
  shape: {
    type: String,
  },
  color: {
    type: String,
  },
  dimension: {
    type: String,
  },

});

const product = mongoose.model('product', productSchema);

module.exports = product;
