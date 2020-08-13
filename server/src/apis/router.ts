import express from 'express';
import { slow } from './controllers/download';

export default express.Router()
  .get('/slow', slow);