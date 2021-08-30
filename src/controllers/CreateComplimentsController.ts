import { Request, Response } from "express";
import { Compliment } from "../entities/Compliments";
import { CreateComplimentService } from "../service/ComplimentsService";

class CreateComplimentsController {

  async handle(request: Request, response: Response) {
    const { 
      tag_id,
      user_sender,
      user_receiver,
      message,
    } = request.body;

    const createComplimentsService = new CreateComplimentService();

    const compliment = await createComplimentsService.execute({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    return response.json(compliment);
  }
}

export { CreateComplimentsController };