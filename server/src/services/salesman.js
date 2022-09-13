import { Salesman } from '../models/salesman.js';

const add = (model) => {
    const salesman = new Salesman(model)
    salesman.save();
    return salesman;
}

const getAll = () => {
    const salesman = Salesman.find({}).sort({ "updatedAt": -1});
    return salesman;
}

const update = (model) => {
    const salesman = Salesman.findByIdAndUpdate(model.id, model);
    return salesman;
}

const getById = (model) => {
    const salesman = Salesman.findOne({ _id: model.id});
    return salesman;
} 

const deleteSalesman = (model) => {
    const salesman = Salesman.findByIdAndDelete({ _id: model.id });
    return salesman;
}

const salesmanService = {
    add,
    getAll,
    update,
    getById,
    deleteSalesman
}

export {
    salesmanService
}