const express = require('express');
const router = express.Router();
const controller = require ("../controllers/admin.controller")

router.post("/register",controller.store);
router.post("/verifyAdmin",controller.VerifyAdmin);
router.post("/login",controller.login);
router.get("/:id",controller.get);

module.exports = router;