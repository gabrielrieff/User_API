import { hash } from "bcryptjs";
import prismaClient from "../../prisma"

interface resetPasswordRequest{
  user_id: string;
  newPassword: string
}

class resetPasswordService{
  async execute({user_id, newPassword}: resetPasswordRequest){

    const passwordHash = await hash(newPassword, 8);

    try{
      const userAlreadyExists = await prismaClient.user.findFirst({
        where: {
          id: user_id
        }
      })

      if(!userAlreadyExists){
        throw new Error("User not exist")
      }

      const userResetPassword = await prismaClient.user.update({
        where: {
          id: user_id
        },
        data:{
          password: passwordHash
        },
        select:{
          birthDate: true,
          email: true,
          name: true
        }
      })

      return userResetPassword
    }catch(erro){
      throw new Error("error User not exist")
    }
  }
}

export { resetPasswordService }