
const express=require("express");
const todoRouter=require('./route/todo');
const cors=require('cors')
const app= express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/todo',todoRouter)

app.listen(3000,()=>{
    console.log("Running")
})
