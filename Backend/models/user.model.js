const mongoose = require ('mongoose');

const userSchema= mongoose.Schema({
    name:{type:String},
    email:{type:String,require:true},
    password:{type:String,require:true},
    age:{type:Number},
    country:{type:String},
    phone:{type:Number},
});

module.exports = mongoose.model('User',userSchema);