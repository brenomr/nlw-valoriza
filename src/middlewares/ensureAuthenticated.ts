import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated (
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber, validar se preenchido, validar se válido => Token. Recuperar infos usuário
  const authToken = request.headers.authorization

  if(!authToken) {
    return response.status(401).end();
  }

  const token = authToken.split(" ")[1]; //ou const [,token] = authToken.split(" ")

  try {
    const { sub } = verify(token, "8e1501e6ea4f1789441d7879a50e2d88") as IPayload;

    request.user_id = sub;

    return next();
  } catch {
    return response.status(401).end();
  }
}