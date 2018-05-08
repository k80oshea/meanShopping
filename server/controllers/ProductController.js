let Product = require("mongoose").model("Product");

class ProductController{
    all(req, res) { 
        Product.find({}, (err, prods)=> {
            if(err) {
                res.json({errors: err});
            }
            else {
                
                res.json(prods);
            }
        })
    }
    create(req, res) {
        let prod = new Product(req.body);
        prod.save(function(err) {
            if(err) {
                res.json({errors: err});
            }
            else {
                res.json(prod);        
            }
        }) 
    }
    find(req, res) {
        Product.find({_id: req.params.id}, (err, prod)=> {
            if(err) {
                res.json({errors: "Failed to find prod"})
            }
            else {
                res.json(prod);            
            }
        })
    }
    update(req, res) {
        Product.findOne({_id: req.params.id}, (err, prod)=> {
            if(err) {
                res.json({errors: err});                    
            }
            else {
                prod.name = req.body.name || prod.name;
                prod.desc = req.body.desc || prod.desc;
                prod.photosrc = req.body.photosrc || prod.photosrc;
                prod.price = req.body.price || prod.price;
                prod.inventory = req.body.inventory || prod.inventory;
                prod.save(function(err) {
                    if(err) {
                        res.json({errors: err});
                    }
                    else {
                        res.json(prod);
                    }
                })
            }
        })
    }
    destroy(req, res) {
        Product.remove({_id: req.params.id}, (err, prod)=> {
            if(err) {
                res.json({errors: "Error finding prod to delete"})
            }
            else {
                res.json("prod successfully deleted");                   
            }
        })
    }}

module.exports = new ProductController(); 