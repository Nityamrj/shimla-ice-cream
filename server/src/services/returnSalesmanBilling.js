import { ReturnSalesmanBilling } from '../models/returnSalesmanBilling.js';

const add = (model) => {
    console.log('model:', model)
    const returnSalemanBilling = new ReturnSalesmanBilling(model);
    returnSalemanBilling.save();
    return returnSalemanBilling;
}

const getAll = () => {
    const returnSalemanBilling = ReturnSalesmanBilling.find({}).sort({ "updatedAt": -1});
    return returnSalemanBilling;
}

const getAllBySalesmanId = (model) => {
    console.log('salesman_id', model)
    // const returnSalemanBilling = ReturnSalesmanBilling.find({salesman_name: 'Rahul'});
    // const returnSalemanBilling = ReturnSalesmanBilling.find({salesman_id: '626bf999d59b9797b23cf4a5'});
    const returnSalemanBilling = ReturnSalesmanBilling.find({salesman_id: model.salesman_id});
    return returnSalemanBilling;
}

// const update = (model) => {
//     const salemanBilling = SalesmanBilling.findByIdAndUpdate(model.id, model);
//     return salemanBilling;
// }

const getById = (model) => {
    const returnSalemanBilling = ReturnSalesmanBilling.findOne({ _id: model.id});
    return returnSalemanBilling;
} 

// const deleteSalesmanBilling = (model) => {
//     const salemanBilling = SalesmanBilling.findByIdAndDelete({ _id: model.id });
//     return salemanBilling;
// }


const returnSalesmanBillingService = {
    add,
    getAll,
    getAllBySalesmanId,
    getById,
}

export { returnSalesmanBillingService } 