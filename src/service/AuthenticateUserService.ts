import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";
import { sign } from "jsonwebtoken";


interface IAuthenticaterequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticaterequest) {

    // verificar se e-mail existe => verificar senha correta => gerar token
    
    const userRepositories = getCustomRepository(UserRepositories);

    const user = await userRepositories.findOne({
      email: email
    });

    if(!user) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign({
      email: user.email
    }, process.env.SECRET_KEY, {
      subject: user.id,
      expiresIn: "1d",
    });

    return token;
  }
}

export { AuthenticateUserService };