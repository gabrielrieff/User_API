import { Router} from 'express'
import { isAuthenticated } from './app/middlewares/isAuthenticated';

import { authUserController } from './app/controllers/user/authUserController';
import { createUserController } from './app/controllers/user/createUserController';
import { detailUserController } from './app/controllers/user/detailUserController';
import { resetPasswordController } from './app/controllers/user/resetPasswordController';
import { forgotPasswordController } from './app/controllers/user/forgotPasswordController';
import { recoverForgottenPasswordController } from './app/controllers/user/recoverForgottenPasswordController';

const router = Router();

router.post('/user', new createUserController().handle);
router.post('/session', new authUserController().handle);
router.get('/detail', isAuthenticated, new detailUserController().handle);
router.patch('/reset', isAuthenticated, new resetPasswordController().handle);

router.post('/forgotPassword', new forgotPasswordController().handle)
router.post('/recover_reset_password', new recoverForgottenPasswordController().handle)

export { router };