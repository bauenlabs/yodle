/**
 * @file yodle-hostname.js
 * Contains hostname API definition for Yodle.
 */

const serverless = require('serverless-http');

module.exports.api = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/vnd.api+json',
    },
    body: { 'message': 'hi there' },
  });
};
