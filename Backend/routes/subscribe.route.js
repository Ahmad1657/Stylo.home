const express = require ("express");
const router = express.Router();
const controller = require ("../controllers/subscribe.controller")

router.post ("/subscribe",controller.subscribe);

module.exports = router;