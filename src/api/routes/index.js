const express = require('express');
const router = express.Router();
/* routes */
const  product = require('./product');
const  category = require('./category');

router.use('/product', product);
router.use('/category',category);

module.exports = router;