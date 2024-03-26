const exp = require('constants');
const express=require('express')

const router=express.Router();

const path=require('path')

const rootPath=require('../ROOTPATH/rootpath')

const helpdeskController=require('../Controller/helpdeskController')

const adminController=require('../Controller/adminController')

router.get('/add-product',adminController.addProduct)
router.post('/products',adminController.products)

router.get('/contact-us',helpdeskController.getHelpMethod)


module.exports=router;