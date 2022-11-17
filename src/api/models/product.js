const   mongoose  = require("mongoose");
const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'The Title IS Required']
    },
    category:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'category'
        }
    ],
    price:{
        type:Number,
        required:[true,'The Price IS Required']
    }
})


module.exports=mongoose.model('products',productSchema)
