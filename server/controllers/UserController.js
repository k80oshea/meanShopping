let User = require("mongoose").model("User");
let Product = require("mongoose").model("Product");

let bcrypt = require("bcrypt-nodejs");

class UserController{
    register(req, res) {
        let firstuser;
        User.find({}, (err, users)=> {
            if(err) {
                res.json({errors:err});
            }
            else {
                if(users.length < 1) {
                    console.log("7")        
                    firstuser = true;
                }
                else {
                    firstuser = false;
                }
            }
        });
        User.findOne({email:req.body.email},(err,user)=>{
            if(user) {
                return res.json({errors:"A user with this email already exists!"});
            }
            else {
                let newUser = new User(req.body);
                if(firstuser) {
                    // admin users cannot purchase merchandise and must create a regular user account
                    newUser.admin = true;
                    newUser.cart = null;
                    newUser.history = null;
                }
                newUser.password = bcrypt.hashSync(req.body.password);
                let passcheck = bcrypt.compareSync(req.body.confirm, newUser.password);
                if(passcheck == true) {
                    newUser.save(err=>{
                    if(err) {
                        // console.log("9")        
                        res.json({errors: err});
                    }
                    else {
                        // console.log("10")   
                        req.session.userId = newUser._id;                             
                        res.json(newUser);
                        }
                    })
                }
                else {
                    // console.log("11")        
                    res.json({errors: "Password and Confirmation Password do not match"});
                }
            }
        });
    }
    login(req, res) {
        User.findOne({email: req.body.email},(err,user)=>{
            if(err) {
                res.json({errors: "Email not found. Please register."})
            }
            else {
                bcrypt.compare(req.body.password, user.password, function(err, result) {
                    if(err) {
                        res.json({errors: "Incorrect password"});
                    }
                    else {
                        req.session.userId = user._id;
                        res.json(user);
                    }
                })
            }
        })
    }
    logout(req, res) {
        req.session.userId = null;
        res.json(true)
    }
    findCart(req, res) {
        var x = 5;
        User.find({_id:req.params.id})
        .populate({
            model:"Product",
            path:"cart.item",
            // populate: {
            //     model: "Product",
            //     path: "history[0][0].item" 
            // }
        })
        .populate({
            model: "Product",
            path: "history",},
            { history.length : { $gte: 3 }}
         )
        .exec((err, userArray)=> {
            if(err) {
                res.json({errors: "Could not find user"});
            }
            else {
                let user = userArray[0];
                console.log("historyyy", user.history)
                // for(let x of user.history) {
                //     populate({
                //         model: "Product",
                //         path: "x.item"
                //     })
                // }
                // console.log("new populate", user.history)                
                res.json(user);
                // console.log("cart.item", user);
            }
        });
        // for(let x of user.history) {
        //     for(let y of x) {
        //         y.populate('item').execPopulate(function() {
        //             next();
        //         });
        //     }

        // }
        // console.log(" after loop", user);
        // res.json(user);
    }
    cart(req, res) { 
        Product.findOne({_id: req.body.prodId}, (err, prod)=> {
            if(err) {
                res.json({errors: "Could not find product"});                    
            }
            else {
                prod.inventory = prod.inventory - req.body.quantity;
                console.log("pprroodd", prod.inventory, req.body.quantity)
                prod.save(function(err) {
                    if(err) {
                        res.json({errors: "Unable to update product"});
                    }
                    else {
                        User.findOne({_id:req.params.id}, (err, user)=> {
                            if(err) {
                                res.json({errors: "Failed to lookup user."});
                            }
                            else {
                                if(user.cart == undefined) {
                                    user.cart = [];
                                }
                        // what if the user adds the same icon a second time
                                user.cart.push({item:prod, quantity:req.body.quantity});                         
                                user.save(err=> {
                                    if(err) {
                                        res.json({errors: "Could not save user"});
                                    }
                                    else {
                                        res.json({user, success: "Succesfully added to cart!"});
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    drop(req, res) { // drops full item from cart and replenishes inventory on actual product
        User.findOne({_id:req.params.id}, (err, user)=> {
            if(err) {
                res.json({errors: "Failed to lookup user."});
            }
            else {
                for(let x in user.cart) {
                    if(user.cart[x].item == req.body.item._id){
                        user.cart.splice(x,1);
                    }
                }
                user.save(err=> {
                    if(err) {
                        res.json({errors: "Could not save user"});
                    }
                    else {
                        Product.findOne({_id: req.body.item}, (err, prod)=> {
                            if(err) {
                                res.json({errors: "Could not find product"});                    
                            }
                            else {
                                prod.inventory = prod.inventory + req.body.quantity;
                                prod.save(function(err) {
                                    if(err) {
                                        res.json({errors: "Unable to update product"});
                                    }
                                    else {
                                        res.json(user);
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    empty(req, res) { // empties full cart
        User.find({_id: req.params.id}, (err, userArray)=> {
            if(err) {
                res.json({errors: "Could not find user"});
            }
            else {
                let user = userArray[0];
                for(let x of user.cart) {
                    Product.findOne({_id: x.item}, (err, prod)=> {
                        if(err) {
                            res.json({errors: "Could not find product"});                    
                        }
                        else {
                            prod.inventory = prod.inventory + x.quantity;
                            prod.save(function(err) {
                                if(err) {
                                    res.json({errors: "Unable to update product"});
                                }
                                else { 
                                    return prod;
                                }
                            })
                        }
                    })
                }                
                user.cart = [];
                user.save(err=> {
                    if(err) {
                        res.json({errors: "Could not save user"});
                    }
                    else {
                        res.json(user);
                    }
                });
            }
        })
    } 
    purchase(req, res) {
        User.find({_id: req.params.id}, (err, userArray)=> {
            if(err) {
                res.json({errors: "Could not find user"});
            }
            else {
                let user = userArray[0];
                if(user.history == undefined) {
                    user.history = [];
                }
                user.history.push(user.cart);
                user.cart = [];
                console.log("empty cart, new hist", user)
                user.save(err=> {
                    if(err) {
                        res.json({errors: "Could not save user"});
                    }
                    else {
                        res.json(user);
                    }
                });
            }
        })
    } 
    update(req, res) {

    }

    // db.users.update({first:"Caroline"}, {$set: {cart: []}})


    // destroy(req, res) {
    //     User.findOne({_id: req.session._id}, (err, user)=> { 
    //         if(user.admin == true) {
    //             User.remove({_id: req.params._id}, (err)=> {
    //                 if(err) {
    //                     res.json({errors: "Error removing user"})
    //                 }
    //                 else {     
    //                     res.json("user successfully deleted");
    //                 }
    //             })
    //         }
    //         else if(user._id == req.params._id) {
    //             User.remove({_id: req.params._id}, (err)=> {
    //                 if(err) {
    //                     res.json({errors: "Error removing user"})
    //                 }
    //                 else {     
    //                     res.json("logged in user successfully deleted");
    //                 }
    //             })
    //         }
    //         else {
    //             res.json({errors: "Not authorized to remove this user"})
    //         }
    //     })
    // }
}
module.exports = new UserController(); 
