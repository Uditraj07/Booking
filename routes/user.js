const express=require('express');

const router=express.Router();

const path=require('../ROOTPATH/rootpath')

const userController=require('../Controller/userController')

router.get('/getproducts',userController.viewProducts)

module.exports=router