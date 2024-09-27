const mongoose = require ('mongoose');

const subscribeSchema = mongoose.Schema ({
    email:{type:String , require:true, unique: true},
});

module.exports = mongoose.model ('Subscribe',subscribeSchema);