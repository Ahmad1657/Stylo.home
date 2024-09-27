const mongoose = require ('mongoose');

const userSchema= mongoose.Schema({
    name:{type:String},
    email:{type:String,require:true, unique:true },
    password:{type:String,require:true},
    gender:{type:String},
    age:{type:Number},
    country:{type:String},
    phone:{type:Number, unique:true},
    code:{type:String},
    isEmailverified:{type:Boolean,default:false},
});

module.exports = mongoose.model('User',userSchema);