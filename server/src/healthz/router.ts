import express from 'express';
import { readiness } from './controllers/healthz';

export default express.Router()
  .get('/readiness', readiness);