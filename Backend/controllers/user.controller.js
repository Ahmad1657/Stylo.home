const User = require("../models/user.model");
const bcrypt = require("bcrypt")
const Salt = 10;
var jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
    try {
        const { password } = req.body;
        const encryptedPassword = await bcrypt.hash(password,Salt)
        req.body.password = encryptedPassword;
        const user = await User.create(req.body)
        res.json({ status: 200, message: "User created successfully", user })
    }
    catch (err) {
        console.log(err);
    }
};

exports.login = async (req, res) => {
    try {
        const { email,password } = req.body;
        const user = await User.findOne({ email:email });
        if(!user){
           return res.json({ status: 404, message: "User not found", success:false});
        }

        const comparePassword=await bcrypt.compare(password, user.password);
        if(comparePassword){
            var token = jwt.sign({ id:user._id }, 'abc123456');
            return res.json({status: 200, message:"User Login Successfully.", success:true, token:token});
        }
        else{
            return res.json({status: 401, message:"Wrong Password", success:false});
        }
         
    }
    catch (err) {
        console.log(err);
    }
};

exports.index = async (req, res) => {
    try {
        const users = await User.find()
        res.json({ status: 200, message: "Users fetched successfully", users })
    }
    catch (err) {
        console.log(err);
    }
};

exports.get = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const user = await User.findOne({ _id: id })
        if (!user) {
            return res.json({ status: 404, success: false, message: `User not found` })
        }
        res.json({ status: 200, success: true, message: "User found successfully", user })
    }
    catch (err) {
        console.log(err);
    }
};

exports.destroy = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const user = await User.findOneAndDelete({ _id: id })
        if (!user) {
            return res.json({ status: 404, success: false, message: `User not found` })
        }
        res.json({ status: 200, message: "User deleted successfully" })
    }
    catch (err) {
        console.log(err);
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const user = await user.findOneAndUpdate({ _id: id }, req.body, { new: true })
        if (!user) {
            return res.json({ status: 404, success: false, message: `User not found` })
        }
        res.json({ status: 200, message: "User updated successfully" })
    }
    catch (err) {
        console.log(err);
    }
};