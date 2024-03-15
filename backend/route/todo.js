const express=require("express");
const task=require('../models/db')
const router=express.Router();

router.get("/",async (req,res)=>{
    const r=await task.find({});
    res.json({r});
})

router.post("/new",async (req,res)=>{

    if(req.body.title != " " || req.body.description!=" "){
const newTodo= await task.create({
    title:req.body.title,
    description: req.body.description,
})
    console.log(newTodo)
    res.json({
        newTodo,
        message:"Todo Created"
    })
    } else{
    res.json({
        message:"need inputs"
    })
    }


})

router.put("/:title", async (req,res)=>{
    const t=req.params.title
    const titleId=await task.findOne({title:t})

     const updated=await task.findOneAndUpdate({_id:titleId.id},
        {title:req.body.title,
    description:req.body.description});

    res.json({
        updated,
        updatedTitle:updated.title,
        updatedDescription:updated.description,
        message:"Updated Successfully"
    })
})

router.delete('/:title',async (req,res)=>{
    const t=req.params.title
    const id= await task.findOne({title:t})
    const del=await task.findOneAndDelete({_id:id})
    res.json({
        del,
        message:"Deleted Successfully"
    })
})



module.exports=router