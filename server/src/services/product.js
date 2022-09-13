import { Product } from '../models/product.js'

const create = (model) => {
    const product = new Product(model);
    product.save();
    return product;
}

const update = (model) => {
    const product = Product.findByIdAndUpdate(model.id, model);
    return product;
}

const getAll = () => {
    const product = Product.find({}).sort({ "updatedAt": -1});
    return product;
}

const getById = (model) => {
    const product = Product.findOne({ _id: model.id});
    return product;
} 

const getByProduct = (model) => {
    return Product.find({ product_name: model.product_name})
}

const getByCategory = (model) => {
    const product = Product.find({ category_name: model.category, status: true});
    return product;
}

const deleteProduct = (model) => {
    const product = Product.findByIdAndDelete({ _id: model.id });
    return product;
}

const productService = {
    create,
    update,
    getAll,
    getById,
    getByProduct,
    getByCategory,
    deleteProduct
}

export {
    productService
}