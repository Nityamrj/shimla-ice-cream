import express from 'express';
import { salesmanController } from '../controllers/salesman.js'

const router = express.Router();

let basePath = '/salesman';

router.post(`${basePath}/add`, salesmanController.add);
router.get(`${basePath}/getAll`, salesmanController.getAll);
router.post(`${basePath}/update`, salesmanController.update);
router.get(`${basePath}/getById/:id`, salesmanController.getById);
router.delete(`${basePath}/delete/:id`, salesmanController.deleteSalesman);
 
export default router; 