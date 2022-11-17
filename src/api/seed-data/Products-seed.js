const productModel=require('../models/product')
require('dotenv').config()
const mongoose = require('mongoose');


mongoose.connect(process.env.DB_URl,{
        
}).then(()=>console.log('Databse Connected')).catch((err)=>console.log(err))


const insertData=async()=>{
    var array=[]
    for (let i = 0; i < 10000; i++) {
        const title=`name-${i}`;
        const price=i
        array.push({title,price,category:['6374cadc7e901268d3e0d49f','6374cadc7e901268d3e0d49f','6374cadc7e901268d3e0d49f']})
        
    }
    
    await productModel.insertMany(array)
    console.log('end')
}
const removeData=async()=>{
    await productModel.deleteMany()
    console.log('end')
}
if(process.argv[2]==='import'){
    insertData()
}
if(process.argv[2]==='remove'){
    removeData()
}