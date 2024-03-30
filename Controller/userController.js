const path=require('path')

const rootPath=require('../ROOTPATH/rootpath')

const Product=require('../Model/product')

exports.viewProducts=(req,res)=>{
        Product.fetchAll().then((result)=>{
            console.log(result)
            res.send("<h1>Products Fetched Succesfully</h1>")
        }).catch((error)=>{
            console.log(erroor)
        });
        
    }