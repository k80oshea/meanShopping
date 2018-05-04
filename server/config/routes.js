let ProductController = require("../controllers/ProductController.js");
let UserController = require("../controllers/UserController.js");

let path = require('path');

module.exports = function(app){
    app.post("/login", UserController.login);
    app.get("/logout", UserController.logout);    
    app.post("/register", UserController.register);
    // app.get("/session", UserController.session);
    app.post("/users/:id", UserController.cart);
    app.get("/users/:id", UserController.find);    
    // app.put("/users/:id", UserController.update);
    // app.delete("/users/:id", UserController.destroy);

    app.get("/products", ProductController.all);
    app.post("/products", ProductController.create);
    app.get("/products/:id", ProductController.find);
    app.put("/products/:id", ProductController.update);
    app.delete("/products/:id", ProductController.destroy); 

    app.all("**", (request, response) => { response.sendFile(path.resolve("./client/dist/index.html")) });
    
}