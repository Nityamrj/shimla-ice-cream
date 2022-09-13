import express from 'express';
import { userController } from '../controllers/user.js'
import auth from '../middlewares/auth.js'

const router = express.Router();

const basePath = '/user';

router.post(`${basePath}/add`, userController.add);
router.post(`${basePath}/login`, userController.login);
router.get(`${basePath}/logout`, auth, userController.logout);
router.get(`${basePath}/me`, auth, async(req, res) => {
    res.send(req.user)
})
router.patch(`${basePath}/me`, auth, userController.update);


export default router;