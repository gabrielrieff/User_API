import { hash } from "bcryptjs";
import prismaClient from "../../../prisma"

interface resetPasswordRequest{
  email: string
  newPassword: string;
  token?: Date
}

class recoverForgottenPasswordService{
  async execute({email, newPassword, token}: resetPasswordRequest){

    const passwordHash = await hash(newPassword, 8);
      console.log(email)
    try{
      const user = await prismaClient.user.findFirst({
        where:{
            email: email
        },
        select: {
          passwordResetExpired: true,
          passwordResetToken: true
        }
      })

      if(!user){
        throw new Error("User not exist")
      }

      if(!user.passwordResetToken){
        throw new Error("Token invalid")
      }

      const now = new Date();
      if(now > user.passwordResetExpired){
        throw new Error("Token expired, generate a new one")
      }

      const userResetPassword = await prismaClient.user.updateMany({
        where: {
          email: email,
        },
        data:{
          password: passwordHash
        }
      })

      return userResetPassword
    }catch(erro){
      throw new Error("error User not exist")
    }
  }
}

export { recoverForgottenPasswordService }