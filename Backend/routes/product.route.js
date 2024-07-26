const express = require('express');
const router = express.Router();
const controller = require("../controllers/product.controller")

router.post("/",controller.store);

module.exports = router;