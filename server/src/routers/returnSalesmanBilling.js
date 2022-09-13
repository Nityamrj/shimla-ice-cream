import express from 'express';
import { returnSalesmanBillingController } from '../controllers/returnSalesmanBilling.js';

const router = express.Router();

const basePath = '/returnSalesmanBilling';

router.post(`${basePath}/add`, returnSalesmanBillingController.add);
router.get(`${basePath}/getAll`, returnSalesmanBillingController.getAll);
router.get(`${basePath}/getAllBySalesmanId/:salesman_id`, returnSalesmanBillingController.getAllBySalesmanId);
// router.post(`${basePath}/update`, salesmanBillingController.update);
router.get(`${basePath}/getById/:id`, returnSalesmanBillingController.getById);
// router.delete(`${basePath}/delete/:id`, salesmanBillingController.deleteSalesmanBilling);

export default router;  