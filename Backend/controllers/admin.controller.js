const Admin = require('../models/admin.model');
const bcrypt = require("bcrypt")
const Salt = 10;
var jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');
const secretKey = 'your_secret_key';
const sendEmail = require('../utils/sendEmail');

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
        const { code } = req.body

        const admin = await Admin.findOne({ code: code })

        if (!admin) {
            res.json({ success: false, status: 401, message: "Admin not Found" })
        }
        if (code === admin.code) {
            admin.isEmailVerified = true;
            admin.code = null;
            admin.save();

            var token = jwt.sign({ id: admin._id }, 'abc123456');
            var role = "admin";

            const encryptedToken = CryptoJS.AES.encrypt(token, 'your_secret_key').toString();
            const encryptedRole = CryptoJS.AES.encrypt(role, 'your_secret_key').toString();

            res.json({ success: true, status: 200, message: "Admin Verified Successfully", role: encryptedRole, token: encryptedToken })
        }

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
            var role = "admin";

            const encryptedToken = CryptoJS.AES.encrypt(token, 'your_secret_key').toString();
            const encryptedRole = CryptoJS.AES.encrypt(role, 'your_secret_key').toString();

            res.json({ success: true, staus: 200, message: 'Admin Logined Successfully', role: encryptedRole, token: encryptedToken })
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
        res.json({ status: 200, success: true, message: "Admin found successfully", role: "admin", admin })
    }
    catch (err) {
        console.log(err);
    }
};

exports.index = async (req, res) => {
    try {
        const admins = await Admin.find()
        res.json({ status: 200, message: "Admin fetched successfully", admins })
    }
    catch (err) {
        console.log(err);
    }
};

exports.forgotPassword = async (req, res) => {
    try {
        const { email, code } = req.body;
        const admin = await Admin.findOne({ email: email });


        if (admin) {
            const randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

            admin.isEmailverified = false;
            admin.code = randomNumber;
            admin.save();

            const subject = "Welcome to Stylo";
            const text = `This is a greeting note for you as you have registered on our website.Thnks.This is your verification code ${randomNumber}`;
            sendEmail(admin.email, subject, text)

            return res.json({ status: 200, message: "Verification Code sent on your Email", success: true })

        }
        else {
            return res.json({ status: 404, message: "Admin not found", success: false })
        }


    }
    catch (err) {
        console.log(err)
    }
}