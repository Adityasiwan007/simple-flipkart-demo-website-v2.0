const mongoose = require("mongoose");

let schema = mongoose.Schema({
  id: Number,
  RQ: Number,
  rating: Number,
  name: String,
  description: String,
  category: String, // shirt,top
  price: {
    value: Number,
    currencyIsoCode: String
  },
  images: [
    {
      url: String
    }
  ],
  reason: [String]
});

module.exports = mongoose.model("product_structure", schema);
