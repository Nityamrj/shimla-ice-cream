import express from 'express';
import { productController } from '../controllers/product.js'
import duplicateProduct from '../middlewares/duplicateProduct.js'

const router = express.Router();

const basePath = '/product'; 

router.post(`${basePath}/add`, duplicateProduct, productController.create); 
router.post(`${basePath}/update`, productController.update);
router.get(`${basePath}/getAll`, productController.getAll);
router.get(`${basePath}/getById/:id`, productController.getById);
router.get(`${basePath}/getByCategory/:category`, productController.getByCategory);
router.delete(`${basePath}/delete/:id`, productController.deleteProduct);

export default router;