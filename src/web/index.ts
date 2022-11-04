import app from './app';

import logger from '../lib/logger';

const port: number = Number(process.env.PORT) || 5000;
const message = `App running on: http://localhost:${port}`;

/**
 * Run the application on the defined port.
 */
app.listen(port, () => logger.info(message));
