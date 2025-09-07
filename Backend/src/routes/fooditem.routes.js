const express = require("express");
const foodController = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

// POST /api/fooditem/   [This API should be protected]  
router.post("/",
  authMiddleware.authFoodPartnerMiddleware,
  upload.single("video"),
  foodController.createFoodItem
);


// GET /api/fooditem/   [This API should be protected]  
router.get("/",
  authMiddleware.authUserMiddleware,
  foodController.getFoodItems
)

module.exports = router;
