import { Request, Response } from "express";

export const readiness = (_: Request, response: Response) => {
  response.status(200).send();
}