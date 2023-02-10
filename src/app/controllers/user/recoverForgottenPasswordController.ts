import { Request, Response } from "express";
import { recoverForgottenPasswordService } from "../../services/user/recoverForgottenPasswordService";

class recoverForgottenPasswordController{
  async handle(req: Request, res: Response){

    const { newPassword, token, email } = req.body;

    const ResetPassWord = new recoverForgottenPasswordService();

    const userPassword = await ResetPassWord.execute({
      email,
      newPassword,
      token
    })

    return res.json(userPassword)
  }
}

export { recoverForgottenPasswordController }