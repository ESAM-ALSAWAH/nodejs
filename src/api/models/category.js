const   mongoose  = require("mongoose");
const categorySchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'The Title IS Required']
    }    
})


module.exports=mongoose.model('category',categorySchema)
