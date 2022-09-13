import { categoryService } from '../services/category.js'

const create = async (req, res) => {
    try {
        const category = await categoryService.create(req.body);
        res.status(201).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
}

const update = async (req, res) => {
    try {
        const category = await categoryService.update(req.body);
        res.status(201).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
}

const deleteCategory = async (req, res) => {
    try {
        const category = await categoryService.deleteCategory(req.params);
        res.status(200).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
}

const getAll = async (req, res) => {
    try {
        const category = await categoryService.getAll();
        res.status(200).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
}

const getById = async (req, res) => {
    try {
        const category = await categoryService.getById(req.params);
        res.status(200).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
}

const categoryController = {
    create,
    update,
    deleteCategory,
    getAll,
    getById,
}


export { categoryController }