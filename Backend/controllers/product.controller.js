const Product = require("../models/product.model");
// const { param } = require("../routes");

exports.store = async (req, res) => {
    try {
        req.body.image = req.file.filename;
        const product = await Product.create(req.body)
        res.json({ status: 200, message: "Product created successfully", success:true, product })
    }
    catch (err) {
        console.log(err);
    }
};

exports.index = async (req, res) => {
    try {
        const {category}=req.query;
        const query={};
        if(category){
            query.category=category;
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
        const {id} = req.params;
        console.log(id);
        const product = await Product.findOne({_id:id})
        if(!product){
           return res.json({status:404, success:false, message:`Product not found`})
        }
        res.json({ status: 200, message: "Product found successfully", product })
    }
    catch (err) {
        console.log(err);
    }
};

exports.destroy = async (req, res) => {
    try {
        const {id} = req.params;
        console.log(id);
        const product = await Product.findOneAndDelete({_id:id})
        if(!product){
           return res.json({status:404, success:false, message:`Product not found`})
        }
        res.json({ status: 200, message: "Product deleted successfully"})
    }
    catch (err) {
        console.log(err);
    }
};

exports.update = async (req, res) => {
    try {
        const {id} = req.params;
        console.log(id);
        const product = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
        if(!product){
           return res.json({status:404, success:false, message:`Product not found`})
        }
        res.json({ status: 200, message: "Product updated successfully"})
    }
    catch (err) {
        console.log(err);
    }
};