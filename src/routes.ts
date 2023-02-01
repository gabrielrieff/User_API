import { Router} from 'express'
import { isAuthenticated } from './middlewares/isAuthenticated';

import { authUserController } from './controllers/user/authUserController';
import { createUserController } from './controllers/user/createUserController';
import { detailUserController } from './controllers/user/detailUserController';
import { resetPasswordController } from './controllers/user/resetPasswordController';

const router = Router();

router.post('/user', new createUserController().handle);
router.post('/session', new authUserController().handle);
router.get('/detail', isAuthenticated, new detailUserController().handle);
router.patch('/reset', isAuthenticated, new resetPasswordController().handle);

export { router };