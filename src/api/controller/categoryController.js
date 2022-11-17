


const categoryModel=require('../models/category')
const {CreateSuccess}=require('../helper/response')

exports.createCategory=async(req,res,next)=>{
    try{
        const {title}=req.body
        const category=await new categoryModel({
            title
        })
        await category.save()
        res.send(CreateSuccess({message:'create successed',data:category}))

    }catch(err){
        res.status(500).json(err)
    }
}
exports.deleteCategory=async(req,res,next)=>{
    try{
        const id=req.params.id
        await categoryModel.deleteOne({_id:id})
        res.send(CreateSuccess({message:'delete successed'}))

    }catch(err){
        res.status(500).json(err)
    }
}