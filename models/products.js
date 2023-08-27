const mongoose = require('mongoose');

var productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    default: 0, // Corrected "defalt" to "default" and set a default value
  },
  description: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('products', productsSchema); // Changed 'product' to 'Product' for the model name (capitalized)
