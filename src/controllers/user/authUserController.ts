import { Request, Response } from "express";
import { authUserService } from "../../services/user/authUserService";

class authUserController{
  async handle(req: Request, res: Response){
    const {email, password} = req.body;

    const authNewUserService = new authUserService();

    const auth = await authNewUserService.execute({
      email,
      password
    })

    return res.json(auth)
  }
}

export { authUserController }