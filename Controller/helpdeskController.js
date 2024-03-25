const path=require('path')

const rootPath=require('../ROOTPATH/rootpath')

exports.getHelpMethod=(req,res)=>{
    res.sendFile(path.join(rootPath,'Views','contactUs.html'));
};