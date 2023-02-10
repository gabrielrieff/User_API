import prismaClient from "../../../prisma";
import { hash } from "bcryptjs";

interface userRequest {
  name: string;
  email: string;
  password: string;
  birthDate?: string;
}

class createUserService{
  async execute({name,email, password, birthDate}: userRequest){

    // const regExpPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$")
    // const regExpEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")

    // if(!regExpPassword.test(password)){
    //   throw new Error('Senha fraca')
    // }

    // if(!regExpEmail.test(email)){
    //   throw new Error('Email Invalido')
    // }

    const passwordHash = await hash(password, 8);

    if(!email){
      throw new Error('Faltou email')
    }

    const userAlreadyExist = await prismaClient.user.findFirst({
      where:{
          email: email
      }
  })

    if(userAlreadyExist){
      throw new Error("User already exists")
    }

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select:{
        id: true,
        email: true,
        name: true
      }
    })

    return user
  }
}

export {createUserService}