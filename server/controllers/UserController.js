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
    session(req, res) {
        if(req.session.userId) {
            User.findOne({_id:req.session.userId})
            .populate({
                model:"Product",
                path:"cart"
            })
            .exec((err, user)=> {
                if(err) {
                    res.json(false);
                }
                else{
                    res.json(user);
                }
            })
        }
        else {
            res.json(false);
        }
    }
    logout(req, res) {
        req.session.userId = null;
        res.json(true)
    }
    cart(req, res) { 
        console.log(req.body)
        User.find({_id:req.params.id})
        .populate({
            model:"Product",
            path:"cart"
        })
        .exec((err, user)=> {
            if(err) {
                res.json({errors: "Failed to lookup user."});
            }
            else {
                console.log("adding things", req.body)
                // push prod id and quantity as tuple? 
                // delete prod from "inventory" on product
                // user.cart.push(req.body)
                // Product.findOne({_id: req.params.id}, (err, prod)=> {
                //     if(err) {
                //         res.json({errors: err});                    
                //     }
                //     else {
                //         prod.quantity = req.body.quantity || prod.quantity;
                //         prod.save(function(err) {
                //             if(err) {
                //                 res.json({errors: err});
                //             }
                //             else {
                //                 res.json(prod);
                //             }
                //         })
                //     }
                // })
                user.save(function(err) {
                    if(err) {
                        res.json({errors: "Could not add to cart"});
                    }
                    else {
                        res.json(user);
                    }
                })
            }
        })
    }
    show(req, res) {
        if(req.session.id) {
            User.findOne({_id:req.session.id})
            .populate({
                model:"Product",
                path:"Cart"
            })
            .exec((err, user)=> {
                if(user) {
                    res.json(user);
                }
                else{
                    res.json({errors: err});
                }
            })
        }
        else {
            res.json(false);
        }
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
