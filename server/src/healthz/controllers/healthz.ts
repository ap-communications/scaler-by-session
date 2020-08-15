import os from 'os';
import { Request, Response } from "express";

export const readiness = (_: Request, response: Response) => {
  response.status(200).json({
    server: `${os.hostname()}`
  });
}