const mongoose = require('mongoose');
const ResponseSchema = require('../models/response');
const user = new ResponseSchema({
    _id: new mongoose.Types.ObjectId(),
    
});

exports.saveResponse = (req, res, next) => {
    user.response=req.body;
    console.log(req.body);
    user.save().then(result=>{
            console.log(result)
            res.send("success");
        
    })

}