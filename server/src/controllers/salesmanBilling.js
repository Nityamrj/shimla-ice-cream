import { salesmanBillingService } from '../services/salesmanBilling.js';

const add = async (req, res) => {
    try {
        const salesmanBilling = await salesmanBillingService.add(req.body);
        res.status(200).send(salesmanBilling);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getAll = async (req, res) => {
    try {
        const salesmanBilling = await salesmanBillingService.getAll();
        res.status(200).send(salesmanBilling);
    } catch (error) {    
        res.send(error)
    }
}

const update = async (req, res) => {
    try {
        const salesmanBilling = await salesmanBillingService.update(req.body);
        res.status(200).send(salesmanBilling)
    } catch (error) {
        res.status(400).send(error);
    }
}

const getById = async (req, res) => {
    try {
        const salesmanBilling = await salesmanBillingService.getById(req.params);
        res.status(200).send(salesmanBilling)
    } catch (error) {
        res.status(400).send(error);
    }
}

const deleteSalesmanBilling = async (req, res) => {
    try {
        const salesmanBilling = await salesmanBillingService.deleteSalesmanBilling(req.params);
        res.status(200).send(salesmanBilling)
    } catch (error) {
        res.status(400).send(error);
    }
}


const salesmanBillingController = {
    add, 
    getAll,
    getById,
    update,
    deleteSalesmanBilling
}

export { salesmanBillingController };