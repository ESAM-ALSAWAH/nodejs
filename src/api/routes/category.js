const router=require('express').Router();
const {createCategory,deleteCategory,getCategories}=require('../controller/categoryController')

router.route('/')
    .post(createCategory)
    .get(getCategories)


router.route('/:id')
    .delete(deleteCategory)

module.exports=router