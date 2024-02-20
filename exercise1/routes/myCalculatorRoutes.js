const express = require("express");
const router = express.Router();
const calcController = require("../controllers/calculatorController");

router.get("/add", calcController.add);
router.get("/subtract", calcController.subtract);
router.get("/divide", calcController.divide);
router.get("/multiply", calcController.multiply);

module.exports = router;
