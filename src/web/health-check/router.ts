import express, { Router, Request, Response } from 'express';

import { version } from '../../../package.json';

const router: Router = express.Router();

/**
 * Health check endpoint, just to check if the web server is up, and what version is running.
 */
export default router.get('/', (_: Request, res: Response) =>
  res.send(`User api - version ${version}`)
);
