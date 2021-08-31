import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UserRepositories } from "../repositories/UsersRepositories";

interface ICompliments {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {

  async execute({ tag_id, user_sender, user_receiver, message }: ICompliments) {
    const complimentsRepositoreis = getCustomRepository(ComplimentsRepositories);
    const userRepositories = getCustomRepository(UserRepositories);

    if(user_sender === user_receiver) {
      throw new Error("You can't send a compliment to yourself");
    }

    const userReceiverExists = await userRepositories.findOne(user_receiver);

    if(!userReceiverExists) {
      throw new Error("User receiver doesn't exists");
    }

    const compliment = complimentsRepositoreis.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    });

    await complimentsRepositoreis.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };