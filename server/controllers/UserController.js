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
    // session(req, res) {
    //     console.log("am i even getting here??", req.session.userId);
    //     if(req.session.userId) {
    //         User.findOne({_id:req.session.userId})
    //         .populate({
    //             model:"Product",
    //             path:"cart"
    //         })
    //         .exec((err, user)=> {
    //             if(err) {
    //                 res.json(false);
    //             }
    //             else{
    //                 res.json(user);
    //             }
    //         })
    //     }
    //     else {
    //         res.json(false);
    //     }
    // }
    logout(req, res) {
        req.session.userId = null;
        res.json(true)
    }
    cart(req, res) { 
        console.log("ctrller", req.body) // ctrller { prodId: '5ae7919c6698cb21f49e2fa6', quantity: 1 }
        Product.findOne({_id: req.body.prodId}, (err, prod)=> {
            if(err) {
                res.json({errors: "Could not find product"});                    
            }
            else {
                prod.quantity = prod.quantity - req.body.quantity;
                // does this rewrite the whole thing...?
                prod.save(function(err) {
                    if(err) {
                        res.json({errors: "Unable to update product"});
                    }
                    else {
                        console.log("inventory updated", prod);
                        // res.json(prod);
                        // User.find({_id:req.params.id})
                        // .populate({
                        //     model:"Product",
                        //     path:"cart"
                        // })
                        // .exec((err, user)=> {
                        User.findOne({_id:req.params.id}, (err, user)=> {
                            if(err) {
                                res.json({errors: "Failed to lookup user."});
                            }
                            else {
                                // console.log(user);
                                // console.log("adding things", req.body); // adding things { prodId: '5ae7919c6698cb21f49e2fa6', quantity: 1 }
                            // push prod id and quantity as tuple? 
                                let want = req.body.quantity;
                                if(user.cart == undefined) {
                                    user.cart = [];
                                    // console.log("hello!")
                                }
                                while(want > 0) { // pushes prodId # times added from inventory
                                    // console.log(want);
                                    // console.log("the cart is", user.cart);
                                    user.cart.push(prod);
                                    // user.cart.push(prod);
                                    // user.cart += req.body.prodId;
                                    want--;
                                    // console.log("the cart is now", user.cart);
                                }
                                console.log("final cart", user.cart);   
                                user.save(err=> {
                                    if(err) {
                                        res.json({errors: "Could not save user"});
                                    }
                                    else {
                                        console.log("product and usercart saved!!", user.cart);
                                        res.json({user, success: "Succesfully added to cart!"});
                                    }
                        })
                    }
                })
            }
        })

        

            // delete prod from "inventory" on product
            }
        })
    }
    find(req, res) {
        User.findOne({id: req.params.id}
        .populate({
            model:"Product",
            path:"Cart"
        })
        .exec((err, user)=> {
            if(err) {
                res.json({errors: "Could not find user"});
            }
            else {
                res.json(user);
            }
        
        }));
        // if(req.session.id) {
        //     User.findOne({_id:req.session.id})
        //     .populate({
        //         model:"Product",
        //         path:"Cart"
        //     })
        //     .exec((err, user)=> {
        //         if(user) {
        //             res.json(user);
        //         }
        //         else{
        //             res.json({errors: err});
        //         }
        //     })
        // }
        // else {
        //     res.json(false);
        // }
    }
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
