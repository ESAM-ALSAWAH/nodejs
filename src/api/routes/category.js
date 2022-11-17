const router=require('express').Router();
const {createCategory,deleteCategory}=require('../controller/categoryController')

router.route('/')
    .post(createCategory)


router.route('/:id')
    .delete(deleteCategory)

module.exports=router