// require means hmm  import kra rhe
const express=require('express');
const app=express();


// yh best practice nhi hai config file se import kro tum
// app.listen(3000,()=>{
//     console.log('Server is running on port 3000');
// })


require("dotenv").config()
// iska mtlb ya toh port number .env file se aega agr nhi aya toh 4000 vala use krege
const PORT =process.env.PORT || 4000;


// controller ke andr hmne data parse/fetch kiya hai TODO.js se toh agr hmne vo parse vali line nhi
// likhege toh error ajaega
// toh  mujhe middleware ki jrurt hogi 
//.middleware to paas json request body 
app.use(express.json()) 


// import routes from to do api

const routing =require("./routes/todos")

// mount kr rhe hm
// mount means versoning kr rhi jaise hm v1 mai kuch 3 chije return kr rhe kl
// ke din new developer ko kuch update krna api mai mai v2 krke likhege jis se readablity bde


// mongodb://localhost:27017/api/v1/ firjocallkruskaroute ajaega
app.use("/api/v1",routing)


// start server
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})


// conncted database
const dBconnecting =require('./config/database')
dBconnecting()



// default route bnanaa pdega
app.get("/",(req,res)=>{
    res.send(`<h1>this is home page</h1>`)
})