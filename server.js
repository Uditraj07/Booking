const express=require('express');

const app=express();

const path=require('path')

app.use(express.static(path.join(__dirname,'public')))

const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

const adminRouter=require('./routes/admin')

const shopRouter=require('./routes/index')

const rootPath=require('./ROOTPATH/rootpath')


app.use('/admin',adminRouter)

app.use('/index',shopRouter)

app.use('/success',(req,res,next)=>{
    res.send("Form Created Successfully")
})

app.use((req,res,next)=>{
    res.sendFile(path.join(rootPath,'Views','404.html'))
})



app.listen(3000)