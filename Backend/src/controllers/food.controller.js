const foodModel = require('../models/fooditem.model');
const storageService = require('../services/storage.service');
const { v4: uuid } = require('uuid');


async function createFoodItem(req, res){

  console.log(req.foodPartner);

  console.log(req.body);
  console.log(req.file);


  const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());


  console.log(fileUploadResult);

  res.send('Food Item Created Successfully');
}


module.exports = {
  createFoodItem
};