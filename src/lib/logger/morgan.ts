import morgan, { StreamOptions } from 'morgan';

import logger from './';

// Override the stream method by telling morgan to use our custom logger instead of the console.log.
const stream: StreamOptions = {
  write: (message) => logger.http(message?.replace(/\n$/, '')),
};

// Skip all the Morgan http log if the application is not running in development mode.
const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip }
);

export default morganMiddleware;
