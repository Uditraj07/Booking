const path=require('path')

const rootPath=require('../ROOTPATH/rootpath')

const Product=require('../Model/product')

exports.viewProducts=(req,res)=>{
    Product.fetchAll().then((result)=>{
        console.log(result);
        res.send("Product fetched successfully");
    }).catch((error)=>{
        console.log(error)
    })
        
    }