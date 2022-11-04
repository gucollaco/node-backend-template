import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import morgan from '../lib/logger/morgan';
import rateLimit from '../lib/rateLimit';

import router from './router';

const app: Express = express();

/**
 * Apply middlewares to the application, and also the injects the router.
 */
export default app
  .use(cors())
  .use(helmet())
  .use(rateLimit)
  .use(express.json())
  .use(morgan)
  .use(router);
