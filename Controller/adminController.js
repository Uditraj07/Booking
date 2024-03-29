const path=require('path')

const rootPath=require('../ROOTPATH/rootpath')

const Product=require('../Model/product')

exports.addProduct=(req,res)=>{
    res.sendFile(path.join(rootPath,'Views','addProduct.html'))
}
exports.AddProducts=(req,res)=>{
    let {item,size}={... req.body}
    let product=new Product(item,size);
    product.save();
    res.send("<h1>Product Added SuccessFully</h1>")
}
exports.GetAllProduct=(req,res)=>{
    Product.fetchAll()
    res.send("<h1>Product fetch Successfully</h1>")
}
exports.getProductById = (req, res) => {
    Product.getById(req.params.id)
        .then(result => {
            res.send(`<h1>${result}</h1>`); // Assuming result is a string or HTML
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Internal Server Error");
        });
};
