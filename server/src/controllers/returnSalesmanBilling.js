import { returnSalesmanBillingService } from '../services/returnSalesmanBilling.js';

const add = async (req, res) => {
    try {
        const returnSalesmanBilling = await returnSalesmanBillingService.add(req.body);
        console.log('controller:', returnSalesmanBilling)
        res.status(200).send(returnSalesmanBilling);
    } catch (error) {
        console.log('error:', error)
        res.status(400).send(error)
    }
}

const getAll = async (req, res) => {
    try {
        const returnSalesmanBilling = await returnSalesmanBillingService.getAll();
        res.status(200).send(returnSalesmanBilling);
    } catch (error) {    
        res.send(error)
    }
}

const getAllBySalesmanId = async (req, res) => {
    try {
        const returnSalesmanBilling = await returnSalesmanBillingService.getAllBySalesmanId(req.params);
        res.status(200).send(returnSalesmanBilling);
    } catch (error) {    
        res.send(error)
    }
}

// const update = async (req, res) => {
//     try {
//         const salesmanBilling = await salesmanBillingService.update(req.body);
//         res.status(200).send(salesmanBilling)
//     } catch (error) {
//         res.status(400).send(error);
//     }
// }

const getById = async (req, res) => {
    try {
        const returnSalesmanBilling = await returnSalesmanBillingService.getById(req.params);
        res.status(200).send(returnSalesmanBilling)
    } catch (error) {
        res.status(400).send(error);
    }
}

// const deleteSalesmanBilling = async (req, res) => {
//     try {
//         const salesmanBilling = await salesmanBillingService.deleteSalesmanBilling(req.params);
//         res.status(200).send(salesmanBilling)
//     } catch (error) {
//         res.status(400).send(error);
//     }
// }


const returnSalesmanBillingController = {
    add, 
    getAll,
    getAllBySalesmanId,
    getById,
}

export { returnSalesmanBillingController };