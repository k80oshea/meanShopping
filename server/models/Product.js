let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.model("Product", new mongoose.Schema({
    name: { type:String, require: true, minlength: 3, maxlength: 255 },
    desc: { type:String, require: true, minlength: 3, maxlength: 255 },
    photosrc: { type:String, require: true, minlength: 3, maxlength: 255 },
    price:{ type:Number, default: 0 },     
    inventory:{ type:Number, default: 0 },
    // categories: [{type:String}],
    }, {timestamps: true} 
));