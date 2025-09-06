const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  foodPartner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'foodpartner',
    required:true
  }

})

const foodItemModel = mongoose.model('foodItem', foodItemSchema);

module.exports = foodItemModel;