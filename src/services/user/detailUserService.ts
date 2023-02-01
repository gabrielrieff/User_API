import prismaClient from "../../prisma"

class detailUserService{
  async execute(user_id: string){

    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id
      },
      select:{
        name: true,
        birthDate: true,
        email: true,
        id: true
      }
    })
    return user
  }
}

export { detailUserService }