import { Response, Request } from 'express';
import { createUserService } from '../../services/user/createUserService';

class createUserController {
  async handle(req: Request, res: Response){

    const {name, email, password} = req.body
    
    const createNewUserService = new createUserService();

    const user = await createNewUserService.execute({
      name,
      email,
      password
    });

    return res.json(user)
  }
}

export { createUserController };