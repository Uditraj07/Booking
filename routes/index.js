const exp = require('constants');
const express=require('express')

const router=express.Router();

const path=require('path')

const rootPath=require('../ROOTPATH/rootpath')

router.get('/',(req,res)=>{
    res.sendFile(path.join(rootPath,'Views','index.html'))
}) 

module.exports=router;
