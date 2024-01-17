const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['aggregate', 'bricks', 'cement', 'dust', 'steel', 'tiles'],
  },
  properties: {
    quality: String,
    size: String,
    brand: String,
    thickness: String,
    minimum_order: String,
    material: String,
    quantity: String,
    type_cement: String,
    source: String,
    price: String,
    company: String,
    shape: String,
    color: String,
    dimension: String,
  },
});

const product = mongoose.model('Product', productSchema);

module.exports = product;
