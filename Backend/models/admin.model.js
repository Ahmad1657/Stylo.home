const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    gender: { type: String },
    age: { type: Number },
    country: { type: String },
    phone: { type: Number, unique: true },
    code: { type: String },
    isEmailVerified: { type: Boolean, default: false }

})

module.exports = mongoose.model('Admin', adminSchema);