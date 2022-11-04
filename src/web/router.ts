import express, { Router } from 'express';

import healthCheckRouter from './health-check/router';
import usersRouter from './v1/users/router';

// import isAuthenticated from "../lib/auth0";

const router: Router = express.Router();

/**
 * Mounts the routers into the main router.
 * v1 endpoints are protected by the isAuthenticated middleware.
 */
export default router
  .use('/', healthCheckRouter)
  // .use(isAuthenticated)
  .use('/v1/users', usersRouter);
