const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://admin:Mongomongo203@cluster0.0rbsm1g.mongodb.net/fulltodo")

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