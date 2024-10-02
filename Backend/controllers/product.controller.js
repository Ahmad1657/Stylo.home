const Product = require("../models/product.model");
const mongoose = require('mongoose');
// const { param } = require("../routes");

exports.store = async (req, res) => {
    try {
        // Check if an image file was uploaded
        if (!req.file) {
            return res.status(400).json({ status: 400, message: "No image file uploaded", success: false });
        }

        // Add the image filename to the request body
        req.body.image = req.file.filename;

        // Create the product in the database
        const product = await Product.create(req.body);

        // Return success response
        res.status(201).json({ status: 201, message: "Product created successfully", success: true, product });
    }
    catch (err) {
        console.error('Error creating product:', err);

        // Return an error response
        res.status(500).json({ status: 500, message: "Internal server error", success: false });
    }
};


exports.index = async (req, res) => {
    try {
        const { category } = req.query;
        const query = {};
        if (category) {
            query.category = category;
        }
        const products = await Product.find(query)
        res.json({ status: 200, message: "Product fetched successfully", products })
    }
    catch (err) {
        console.log(err);
    }
};

exports.get = async (req, res) => {
    try {
        const { id } = req.params;
        let product;
        if (mongoose.Types.ObjectId.isValid(id)) {
            // If valid, attempt to search by _id
            product = await Product.findOne({ _id: id });
        }


        if (!product) {
            const searchQuery = new RegExp(id, 'i'); // Case-insensitive search

            product = await Product.findOne({
                $or: [
                    { name: searchQuery },
                    { description: searchQuery },
                    { category: searchQuery }
                ]
            });
        }
        if (!product) {
            return res.json({ status: 404, success: false, message: `Product not found` })
        }
        res.json({ status: 200, message: "Product found successfully", success: true, product })

    }
    catch (err) {
        console.log(err);
    }
};

exports.destroy = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const product = await Product.findOneAndDelete({ _id: id })
        if (!product) {
            return res.json({ status: 404, success: false, message: `Product not found` })
        }
        res.json({ status: 200, message: "Product deleted successfully" })
    }
    catch (err) {
        console.log(err);
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const product = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        if (!product) {
            return res.json({ status: 404, success: false, message: `Product not found` })
        }
        res.json({ status: 200, message: "Product updated successfully" })
    }
    catch (err) {
        console.log(err);
    }
};