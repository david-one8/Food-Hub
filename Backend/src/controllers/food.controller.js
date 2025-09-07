const foodModel = require('../models/fooditem.model');


async function createFoodItem(req, res){

  console.log(req.foodPartner);

  console.log(req.body);
  console.log(req.file);

  res.send('Food Item Created Successfully');
}


module.exports = {
  createFoodItem
};