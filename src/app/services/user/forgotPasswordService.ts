import prismaClient from "../../../prisma";
import crypto from 'crypto';
import { transport } from "../../modules/mailer";

interface forgotPasswordProps {
  email : string;
}

class forgotPasswordService{
  async execute({email} : forgotPasswordProps){
    try{
      const user = await prismaClient.user.findFirst({
        where:{
            email: email
        }
    })


    if(!user){
        throw new Error("Email not found!")
      }

      const token = crypto.randomBytes(20).toString('hex');

      const now = new Date();
      now.setHours(now.getHours() + 1);

      await prismaClient.user.updateMany({
        where: {
          email: email
        },
        data:{
          passwordResetExpired: now,
          passwordResetToken: token
        }
      });

      transport.sendMail({
        to: email,
        from: 'gabeerieff@gmail.com',
        template: 'auth/forgot_password' ,
        context: {token},
        subject : 'Email enviado',
      }, (err) =>{
        if(err){
          throw new Error("Cannot send password email!")
        }
      })

    }catch(erro) {
      throw new Error("Email not exist!")
    }
  }
}

export { forgotPasswordService }