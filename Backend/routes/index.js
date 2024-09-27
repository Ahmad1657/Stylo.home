const express = require('express');
const router = express.Router();
const productRouter=require("./product.route");
const userRouter=require("./user.route");
const subscribeRouter = require("./subscribe.route");
const adminRouter = require("./admin.route");

router.use("/product",productRouter);
router.use("/user",userRouter);
router.use("/subscribe",subscribeRouter)
router.use("/adminpanel",adminRouter)

module.exports = router;