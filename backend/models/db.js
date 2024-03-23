const mongoose=require('mongoose');
mongoose.connect("url")

const  taskSchema = new mongoose.Schema({
    title: { 
        type : String 
  
        
 },
    description :{
        type :String,
        min:4,
        trim:true
       
    }
 
})



const task= new mongoose.model("task",taskSchema)

module.exports=task