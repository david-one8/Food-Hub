const express = require('express');
const foodController = require('../controllers/food.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

// POST /api/fooditem/   [This API should be protected]  //
router.post('/', authMiddleware.authFoodPartnerMiddleware, foodController.createFoodItem);




module.exports = router;