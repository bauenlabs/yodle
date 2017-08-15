/**
 * @file server.js
 * Starts a local development server.
 */

const hostname = require('./services/yodle-hostname/handler.js');

hostname.api.listen(3000);
