const path=require('path')

const rootPath=require('../ROOTPATH/rootpath')

const Product=require('../Model/product')

exports.addProduct=(req,res)=>{
    res.sendFile(path.join(rootPath,'Views','addProduct.html'))
}
exports.products=(req,res)=>{
    let {item,size}={... req.body}
    let product=new Product(item,size);
    product.save();
    Product.fetchAll();
    res.redirect('/index')
}