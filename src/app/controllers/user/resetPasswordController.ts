import { Request, Response } from "express";
import { resetPasswordService } from "../../services/user/resetPasswordService";

class resetPasswordController{
  async handle(req: Request, res: Response){

    const { newPassword, passwordReseteExpired, token } = req.body;
    const user_id = req.user_id;

    const ResetPassWord = new resetPasswordService();

    const userPassword = await ResetPassWord.execute({
      user_id,
      newPassword,
    })

    return res.json(userPassword)
  }
}

export { resetPasswordController }