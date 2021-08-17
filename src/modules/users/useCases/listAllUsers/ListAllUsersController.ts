import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    try {
      if (typeof user_id === "string") {
        return response.json(this.listAllUsersUseCase.execute({ user_id }));
      }
      return response
        .status(400)
        .json({ error: "User_id header was not send!" });
    } catch (e) {
      return response.status(400).json({ error: e });
    }
  }
}

export { ListAllUsersController };
