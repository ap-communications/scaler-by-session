import path from 'path';
import { Request, Response } from "express";
import { delay } from './delay';

const path200MB = path.resolve('assets/200MB.file');
export const slow = async (_: Request, response: Response) => {
  await delay(10 * 1000 /* millisec */);
  response.status(200).sendFile(path200MB);
}