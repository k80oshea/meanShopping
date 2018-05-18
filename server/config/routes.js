let ProductController = require("../controllers/ProductController.js");
let UserController = require("../controllers/UserController.js");

let path = require('path');

module.exports = function(app){
    app.post("/login", UserController.login);
    app.get("/logout", UserController.logout);    
    app.post("/register", UserController.register);
    app.get("/users/:id", UserController.findCart);
    // app.get("/users/history/:id", UserController.findHist);
    app.put("/users/cart/:id", UserController.cart); // update (adding to cart)
    app.put("/users/drop/:id", UserController.drop); // drop entire item from cart
    app.put("/users/empty/:id", UserController.empty); // empty full cart
    app.put("/users/update/:id", UserController.update); // update cart prod quantity +/-
    app.put("/users/:id", UserController.purchase);
    app.get("/users/:id", UserController.findCart);
    
    // app.delete("/users/:id", UserController.destroy);

    app.get("/products", ProductController.all);
    app.post("/products", ProductController.create);
    app.get("/products/:id", ProductController.find);
    app.put("/products/:id", ProductController.update);
    app.delete("/products/:id", ProductController.destroy); 

    app.all("**", (request, response) => { response.sendFile(path.resolve("./client/dist/index.html")) });
    
}