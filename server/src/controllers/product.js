import { productService } from '../services/product.js'

const create = async (req, res) => {
    try {
        const product = await productService.create(req.body);
        res.status(201).send(product)
    } catch (error) {
        res.status(400).send(error);
    }
}

const update = async (req, res) => {
    try {
        const product = await productService.update(req.body);
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send(error);
    }
}

const getAll = async (req, res) => {
    try {
        const product = await productService.getAll();
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send(error);
    }
}

const getById = async (req, res) => {
    try {
        const product = await productService.getById(req.params);
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send(error);
    }
}

const getByCategory = async (req, res) => {
    try {
        const product = await productService.getByCategory(req.params);
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send(error);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await productService.deleteProduct(req.params);
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send(error);
    }
}

const productController = {
    create,
    update,
    getAll,
    getById,
    getByCategory,
    deleteProduct
}

export { productController };