import { Request, Response } from "express";
import { detailUserService } from "../../services/user/detailUserService";

class detailUserController{
  async handle(req: Request, res: Response){

    const user_id = req.user_id;

    const DetailUserService = new detailUserService();

    const user = await DetailUserService.execute(user_id);


    return res.json(user)
  }
}

export { detailUserController }