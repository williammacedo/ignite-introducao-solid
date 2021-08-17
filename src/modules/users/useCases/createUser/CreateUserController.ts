import e, { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;
    try {
      return response
        .status(201)
        .json(this.createUserUseCase.execute({ name, email }));
    } catch (e) {
      return response.status(400).json({ error: e });
    }
  }
}

export { CreateUserController };
