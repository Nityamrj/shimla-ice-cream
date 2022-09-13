import express from 'express';
import { contactController } from '../controllers/contact.js'

const router = express.Router();

const basePath = '/contact'; 

router.post(`${basePath}/add`, contactController.create); 
router.get(`${basePath}/getAll`, contactController.getAll);

export default router;