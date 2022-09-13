import express from 'express';
import { categoryController } from '../controllers/category.js'
import duplicateCategory from '../middlewares/duplicateCategory.js'

const router = express.Router();

const basePath = '/category';

router.post(`${basePath}/add`, duplicateCategory, categoryController.create);
router.post(`${basePath}/update`, categoryController.update);
router.delete(`${basePath}/delete/:id`, categoryController.deleteCategory);
router.get(`${basePath}/getAll`, categoryController.getAll);
router.get(`${basePath}/getById/:id`, categoryController.getById)

export default router;