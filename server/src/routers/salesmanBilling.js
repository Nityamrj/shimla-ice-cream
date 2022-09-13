import express from 'express';
import { salesmanBillingController } from '../controllers/salesmanBilling.js';

const router = express.Router();

const basePath = '/salesmanBilling';

router.post(`${basePath}/add`, salesmanBillingController.add);
router.get(`${basePath}/getAll`, salesmanBillingController.getAll);
router.post(`${basePath}/update`, salesmanBillingController.update);
router.get(`${basePath}/getById/:id`, salesmanBillingController.getById);
router.delete(`${basePath}/delete/:id`, salesmanBillingController.deleteSalesmanBilling);

export default router;  