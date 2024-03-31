const express=require('express');

const app=express();

const path=require('path')

app.use(express.static(path.join(__dirname,'public')))

const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

const adminRouter=require('./routes/admin')

const shopRouter=require('./routes/index')
const userRouter=require('./routes/user')

const rootPath=require('./ROOTPATH/rootpath')

const sequelize=require('./ROOTPATH/database')


app.use('/admin',adminRouter)

app.use('/index',shopRouter)

app.use('/User',userRouter)

app.use('/success',(req,res,next)=>{
    res.send("Form Created Successfully")
})



app.use((req,res,next)=>{
    res.sendFile(path.join(rootPath,'Views','404.html'))
})

sequelize.sync();

app.listen(3000)