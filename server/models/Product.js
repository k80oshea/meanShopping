let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.model("Product", new mongoose.Schema({
    name: { type:String, require: true, minlength: 3, maxlength: 255 },
    desc: { type:String, require: true, minlength: 3, maxlength: 255 },
    photosrc: { type:String, require: true, minlength: 3, maxlength: 255 },
    price:{ type:Number, default: 0, min: [0, "Price cannot be negative"] },     
    inventory:{ type:Number, default: 0, min: [0, "Inventory is zero"] },
    // categories: [{type:String}],
    }, {timestamps: true} 
));

// db.products.update({}, { $rename: {"quantity":"inventory"}}, {multi:true})
// WriteResult({ "nMatched" : 16, "nUpserted" : 0, "nModified" : 16 })