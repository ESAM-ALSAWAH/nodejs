const router=require('express').Router();
const {getProducts,getOneProduct,createProduct}=require('../controller/productController')

router.route('/')
    .get(getProducts)
    .post(createProduct)


router.route('/:id')
    .get(getOneProduct)




module.exports=router