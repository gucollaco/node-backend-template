import express, { Router } from 'express';

import { getAll, getById, getByEmail, create, removeById } from './controller';

const router: Router = express.Router();

/**
 * Users related endpoints, each one calls a controller method.
 */
export default router
  .get('/', getAll)
  .get('/id/:id', getById)
  .get('/email/:email', getByEmail)
  .post('/', create)
  .delete('/:id', removeById);
