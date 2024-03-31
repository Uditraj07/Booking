const path=require('path')

const rootPath=require('../ROOTPATH/rootpath')

const Product=require('../Model/product')
const { error } = require('console')

exports.addProduct=(req,res)=>{
    res.sendFile(path.join(rootPath,'Views','addProduct.html'))
}
exports.AddProducts=(req,res)=>{
    let {item,size}={... req.body}
    let product=new Product(item,size);
    product.save().then((result)=>{
        console.log(result)
        res.send("<h1>Product added successfully</h1>")
    }).catch((error)=>{
        console.log(error)
    })
}
exports.GetAllProduct=(req,res)=>{
    Product.fetchAll().then((result)=>{
        console.log(result);
        res.send("Product fetched successfully");
    }).catch((error)=>{
        console.log(error)
    })
}
exports.getProductById = (req, res) => {
    Product.getById(req.params.id)
        .then(result => {
            console.log(result[0][0])
            res.send(`<h1>${result}</h1>`); // Assuming result is a string or HTML
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Internal Server Error");
        });
};
