import { salesmanService } from '../services/salesman.js';

const add = async (req, res) => {
    try {
        const salesman = await salesmanService.add(req.body);
        res.status(201).send(salesman);
    } catch (error) {    
        res.send(error)
    }
}

const getAll = async (req, res) => {
    try {
        const salesman = await salesmanService.getAll();
        res.status(200).send(salesman);
    } catch (error) {    
        res.send(error)
    }
}

const update = async (req, res) => {
    try {
        const salesman = await salesmanService.update(req.body);
        res.status(200).send(salesman)
    } catch (error) {
        res.status(400).send(error);
    }
}

const getById = async (req, res) => {
    try {
        const salesman = await salesmanService.getById(req.params);
        res.status(200).send(salesman)
    } catch (error) {
        res.status(400).send(error);
    }
}

const deleteSalesman = async (req, res) => {
    try {
        const salesman = await salesmanService.deleteSalesman(req.params);
        res.status(200).send(salesman)
    } catch (error) {
        res.status(400).send(error);
    }
}

const salesmanController = {
    add,
    getAll,
    update,
    getById,
    deleteSalesman
}

export { salesmanController }