import RateLimit from 'express-rate-limit';

const rateLimit = RateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

export default rateLimit;
