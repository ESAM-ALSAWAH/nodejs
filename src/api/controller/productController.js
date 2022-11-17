const productModel = require('../models/product')
const { getSuccess, CreateSuccess } = require('../helper/response')
const pagination = require('../helper/pagination')
const ObjectId = require('mongoose').Types.ObjectId;

exports.getProducts = async (req, res, next) => {
    try {
        const quires = req.query
        const { page = 1, limit = 10 } = req.query;
        /* Filter  */
        const Filter = {
            ...(quires.title && { title: quires.title }),
            ...(quires.price && { price: { $gte: quires.price } }),
            ...(quires.category && ObjectId.isValid(quires.category) && { category: { $in: [quires.category] } }),

        }

        /* SORT */
        const sort = {
            ...(quires.columnSort && { columnSort: quires.columnSort }),
            ...(quires.dir && { dir: ["1", "-1"].includes(quires.dir) ? quires.dir : 1 }),
        }

        /* GET PRODUCTS */
        const products = await productModel.find({
            ...Filter,

        })
            .populate('category')
            .sort([[sort.columnSort, sort.dir]])
            .lean()
            .skip((+page - 1) * limit)
            .limit(limit)

        const pagenationProps = await pagination(productModel, page, limit)

        res.send(getSuccess({ data: { products, ...pagenationProps } }))

    } catch (err) {
        console.log(err)
        res.status(500).json({ err: err.message })
    }
}

exports.getOneProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        await productModel.findOne({ _id: id }, `title price`).exec((err, data) => {
            if (err) {
                return res.status(404).json({ message: 'not found' })
            }
            res.send(getSuccess({ data }))
        })
    }
    catch (err) {
        res.status(500).send(err)
    }
}


exports.createProduct = async (req, res, next) => {
    try {
        const { title, category, price } = req.body;
        const Product = await new productModel({
            title,
            category,
            price
        });
        await Product.save()
        res.send(CreateSuccess({ message: 'create successed', data: Product }))
    }
    catch (err) {
        res.status(500).send(err)
    }
}