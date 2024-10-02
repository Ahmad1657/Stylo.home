const express = require('express');
const router = express.Router();
const controller = require("../controllers/product.controller")

const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set the destination folder for uploads
  },
  filename: function (req, file, cb) {
    // Extract the file extension
    const ext = path.extname(file.originalname);
    // Set the file name with its original extension
    cb(null, file.filename + '-' + Date.now() + ext);
  }
})
const upload = multer({ storage: storage });

router.post("/", upload.single('image'), controller.store);
router.get("/", controller.index);
router.get("/:id", controller.get);

router.delete("/:id", controller.destroy);
router.put("/:id", controller.update);

module.exports = router;