const Admin = require('../models/admin.model');
const bcrypt = require("bcrypt")
const Salt = 10;
var jwt = require('jsonwebtoken');

exports.store = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await Admin.findOne({ email });
        if (existingUser) {
            return res.json({ status: 400, success: false, message: 'Email already exist' });
        }

        const encryptedPassword = await bcrypt.hash(password, Salt)
        req.body.password = encryptedPassword;

        const randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
        req.body.code = randomNumber;

        const admin = Admin.create(req.body)
        if (admin) {
            res.json({ success: true, status: 200, message: "Admin Created in DataBase" })
        }
        else {
            res.json({ success: false, status: 401, message: "Admin not created Error" })
        }

    }
    catch (err) {
        console.log(err);
    }
}

exports.VerifyAdmin = async (req, res) => {
    try {
        const { email, code } = req.body;
        const admin = await Admin.findOne({ email: email })
        if (!admin) {
            res.json({ success: false, status: 401, message: "Admin not Found" })
        }
        if (code === admin.code) {
            admin.isEmailVerified = true;
            admin.code = null;
            admin.save();
        }
        res.json({ success: true, status: 200, message: "Admin Verified Successfully" })

    }
    catch (err) {
        console.log(err);
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email: email });
        if (!admin) {
            res.json({ success: true, status: true, message: "Invalid Email" })
        }
        const comparePassword = await bcrypt.compare(password, admin.password);
        if (comparePassword) {
            var token = jwt.sign({ id: admin._id }, 'abc123456');
            res.json({ success: true, staus: 200, message: 'Admin Logined Successfully', token: token })
        }
        else {
            res.json({ success: false, staus: 401, message: 'Admin wrong Login Failed' })
        }
    }
    catch (err) {
        console.log(err);
    }
}

exports.get = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findOne({ _id: id });
        if (!admin) {
            return res.json({ status: 404, success: false, message: `Admin not found` })
        }
        res.json({ status: 200, success: true, message: "Admin found successfully", admin })
    }
    catch (err) {
        console.log(err);
    }
}