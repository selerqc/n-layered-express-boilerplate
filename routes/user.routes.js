import express from 'express';
import { createUser } from '../controllers/user.controller.js';
import { userSchema } from '../validations/user.validation.js';
import validate from '../middleware/validate.js';

const router = express.Router();

router.post('/', validate(userSchema), createUser);

export default router;
