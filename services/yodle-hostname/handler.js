/**
 * @file yodle-hostname.js
 * Contains hostname API definition for Yodle.
 */

const express = require('express');
const awsServerlessExpress = require('aws-serverless-express');
const fortune = require('fortune');
const fortuneHTTP = require('fortune-http');
const fortuneMongo = require('fortune-mongodb');
const fortuneJsonAPI = require('fortune-json-api');

// Initialize fortune instance (Define schema and store).
const store = fortune({
  hostname: {
    name: String,
  },
}, {
  adapter: [
    fortuneMongo,
    { url: 'mongodb://34.211.179.255:27017/test' },
  ],
})

// Initialize an HTTP listener.
const listener = fortuneHTTP(store, {
  serializers: [
    [fortuneJsonAPI],
  ],
})

// Initialize app object.
const app = express()
app.use((req, res) => {
  listener(req, res)
})

module.exports.api = app;

// @TODO This is intended to make an express app work on API Gateway. As of now
// it creates issues that are blocking.
// Initialize proxy server.
//const server = awsServerlessExpress.createServer(app, null, ['application/vnd.api+json'])

// Export endpoint handler.
//module.exports.api = (event, context, callback) => {
//  // Stub the succeed method, map it to the callback.
//  /* eslint-disable no-param-reassign */
//  context.succeed = result => callback(null, result);
//  /* eslint-enable no-param-reassign */
//
//  // Run the proxy.
//  awsServerlessExpress.proxy(server, event, context)
//}
