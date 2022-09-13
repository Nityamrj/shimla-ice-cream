import { Category } from '../models/category.js';

const create = (model) => {
    const category = new Category(model);
    category.save();
    return category;
}

const update = (model) => {
    return Category.findByIdAndUpdate(model.id, model );
}

const deleteCategory = (model) => {
    return Category.findByIdAndDelete({ _id: model.id });
}

const getAll = () => {
    return Category.find({}).sort({ "updatedAt": -1});
}

const getById = (model) => {
    return Category.findOne({ _id: model.id });
}

const getByCategory = (model) => {
    return Category.find({ category: model.category.toLowerCase()})
}


const categoryService = {
    create,
    update,
    deleteCategory,
    getAll,
    getById,
    getByCategory
}

export {
    categoryService
}