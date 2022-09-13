import { SalesmanBilling } from '../models/salesmanBilling.js';

const add = (model) => {
    const salemanBilling = new SalesmanBilling(model);
    salemanBilling.save();
    return salemanBilling;
}

const getAll = () => {
    const salemanBilling = SalesmanBilling.find({}).sort({ "updatedAt": -1});
    return salemanBilling;
}

const update = (model) => {
    const salemanBilling = SalesmanBilling.findByIdAndUpdate(model.id, model);
    return salemanBilling;
}

const getById = (model) => {
    const salemanBilling = SalesmanBilling.findOne({ _id: model.id});
    return salemanBilling;
} 

const deleteSalesmanBilling = (model) => {
    const salemanBilling = SalesmanBilling.findByIdAndDelete({ _id: model.id });
    return salemanBilling;
}


const salesmanBillingService = {
    add,
    getAll,
    getById,
    update,
    deleteSalesmanBilling
}

export { salesmanBillingService } 