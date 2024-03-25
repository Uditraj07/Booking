const exp = require('constants');
const express=require('express')

const router=express.Router();

const path=require('path')

const rootPath=require('../ROOTPATH/rootpath')

const helpdeskController=require('../Controller/helpdeskController')

router.get('/add-product',(req,res)=>{
    res.sendFile(path.join(rootPath,'Views','addProduct.html'))
})
router.post('/products',(req,res,)=>{
    res.redirect('/index')
})

router.get('/contact-us',helpdeskController.getHelpMethod)


module.exports=router;