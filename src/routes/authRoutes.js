import express from 'express';
import { login, register } from '../controllers/authController.js';
import { validateLogin, validateRegister } from '../validators/authValidations.js';

const router = express.Router();

router.post('/login', validateLogin, login);
router.post('/register', validateRegister, register);

export default router;
