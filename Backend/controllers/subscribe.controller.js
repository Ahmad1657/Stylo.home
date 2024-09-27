const Subscribe = require ("../models/subscribe.model");

exports.subscribe = async (req , res) => {
    try{
       const subscribe = await Subscribe.create(req.body);
       res.json ({success:true, message:'Subscribed Successfully', status:200})
    }
    catch(err){
        console.error('Fail to Subscribe:', err);

        res.status(500).json({ status: 500, message: "Internal server error", success: false });
    }
}