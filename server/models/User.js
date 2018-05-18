let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.model("User", new mongoose.Schema({
    first: {type:String, required:true, minlength:3, maxlength:255}, 
    last: {type:String, required:true, minlength:3, maxlength:255}, 
    email: {type:String, required:true, minlength:3, maxlength:255}, 
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate: {
            validator: function( value ) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
            },
            message: "Password failed validation- it must have at least 1 number, uppercase letter, special character, and be between 8 and 32 characters long"
        }
    }, 
    admin:{type:Boolean, default:false, required:true},
    cart:[
        { "item":{ type:ObjectId, ref:"Product" }, "quantity":{type:Number, required:true}}
    ],
    history:[
        [{ "item":{ type:ObjectId, ref:"Product" }, "quantity":{type:Number, required:true}}] // array of cart arrays 
    ]}, 
    // history:[
    //     { prev: [{ "item":{ type:ObjectId, ref:"Product" }, "quantity":{type:Number, required:true}}] } // array of cart arrays 
    // ]}, 
    {timestamps: true} 
));

// const HistSchema = new mongoose.Schema({

// });