import { Request, Response } from "express";
import { forgotPasswordService } from '../../services/user/forgotPasswordService'

class forgotPasswordController{

  async handle(req: Request, res:  Response){
  
    const { email } = req.body;

    const ForgotPasswordService = new forgotPasswordService();

    const forgotPassword = ForgotPasswordService.execute({
      email,
    })

    return res.send()
  
  }
}

export { forgotPasswordController }