const mongoose = require('mongoose');


exports.mongooseConnect=()=>{
   return mongoose.connect(process.env.DB_URl,{
        
    }).then(()=>console.log('Databse Connected')).catch((err)=>console.log(err))
}