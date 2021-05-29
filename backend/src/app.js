const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const port = 2000;
const userRoutes= require('../routes/user');
const adminRoutes = require('../routes/admin');
const experienceRoutes = require('../routes/interviewexp');
const userRoute1=require('../routes/profile-routes');
const ancRoute=require('../routes/ancment-router');
const comRoute=require('../routes/company-router');
const UserRouter = require('../routes/user.router');
const QuestionRouter = require('../routes/question.router');

app.use(express.json());
const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(
    cors({
        origin : 'http://localhost:3000',
        credentials: true
    })
);

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// const staticPath  = path.join(__dirname,"../../frontend/src/Component");
// app.use(express.static(staticPath));
// console.log(path.join(__dirname,"../../frontend/src/Component/Forgotpassword"));
// app.use(cors()) ;
//database connection
mongoose.connect('mongodb+srv://sneha:sneha1234@cluster0.lyhnm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify : false ,
    useUnifiedTopology : true
    
}).then(()=>{
    console.log("Database Connected");
}).catch((e)=>{
    console.log(e);
});
app.use('/user',userRoutes);
app.use('/admin',adminRoutes);
app.use('/admin',experienceRoutes);
app.use('/admin/addprofile', userRoute1);
app.use('/admin', userRoute1);
app.use('/company', comRoute);
app.use('/dashboard', ancRoute);
app.use("/posts", require("../routes/post"));
app.use('/users', UserRouter);
app.use('/questions', QuestionRouter)
app.use(cookieParser());
app.listen(port,()=>{
    console.log("server is running on 2000");
})