import express from 'express';
import { partyBookingController } from '../controllers/partyBooking.js'
// import duplicateCategory from '../middlewares/duplicateCategory.js'

const router = express.Router();

const basePath = '/partyBooking';

router.post(`${basePath}/add`, partyBookingController.create);
router.post(`${basePath}/update`, partyBookingController.update);
router.delete(`${basePath}/delete/:id`, partyBookingController.deletePartyBooking);
router.get(`${basePath}/getAll`, partyBookingController.getAll);
router.get(`${basePath}/getById/:id`, partyBookingController.getById)

export default router;