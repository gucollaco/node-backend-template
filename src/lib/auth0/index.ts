import { auth } from 'express-oauth2-jwt-bearer';

import { auth0 } from '../../../config/config.json';

const { issuerBaseURL, audience } = auth0;

/**
 * Middleware that will check if the jwt bearer token used on the request is valid.
 * Returns a 401 error in case the token is not validated.
 */
const isAuthenticated = auth({
  audience: process.env.AUTH0_AUDIENCE || audience,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL || issuerBaseURL,
});

export default isAuthenticated;
