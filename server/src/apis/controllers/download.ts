import path from 'path';
import os from 'os';
import { Request, Response } from "express";
import { delay } from './delay';
import { increaseConnection, decreaseConnection } from '../../metrics/metrics';

const path200MB = path.resolve('assets/200MB.file');
export const slow = async (_: Request, response: Response) => {
  increaseConnection();
  await delay(10 * 1000 /* millisec */);
  response
  .status(200)
  .set('X-Server', `${os.hostname()}`)
  .sendFile(path200MB, _ => decreaseConnection());
}