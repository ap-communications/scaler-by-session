import os from 'os';
import http from 'http';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { createTerminus } from '@godaddy/terminus';
import logger from './utils/logger';
import environment from './config/environment';
import healthz from './healthz/router';

class ExpressServer {
  constructor(private app: Application) {}
  start = () => {
    this.setUp().listen(environment.port);
  }

  private setUp = () => {
    this.app
      .use(bodyParser.json())
      .use('/healthz', healthz);
    return this;
  }

  private listen = (p: number) => {
    const welcome = (port: number) => () => logger.info(`up and running on ${environment.env} @ ${os.hostname()}:${port}`);
    const server = http.createServer(this.app).listen(p, welcome(p));
    createTerminus(server, {
      signals: [ 'SIGTERM', 'SIGINT'],
      onSignal: this.onSignal,
      onShutdown: this.onShutdown
    })
  }


  private onSignal = () => {
    logger.info(`clean up server on ${environment.env}`)
    return Promise.resolve();
  }

  private onShutdown = () => {
    logger.info(`shutdown server on ${environment.env}`);
    return Promise.resolve();
  }
}

export default new ExpressServer(express());
