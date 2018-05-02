var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require("express-session");

var app = express(); 

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(express.static(__dirname+"/client/dist")); 
app.use(session({secret: "ceci n'est pas un secret"}));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(6789, function() {
    console.log("listening on port 6789");
})