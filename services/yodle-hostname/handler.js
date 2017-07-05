/**
 * @file yodle-hostname.js
 * Contains hostname API definition for Yodle.
 */

import express from 'express'
import awsServerlessExpress from 'aws-serverless-express'
import fortune from 'fortune'
import fortuneHTTP from 'fortune-http'
import fortuneMongo from 'fortune-mongodb'
import fortuneJsonAPI from 'fortune-json-api'

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

// Initialize proxy server.
const server = awsServerlessExpress.createServer(app, null, ['application/vnd.api+json'])

// Export endpoint handler.
module.exports.api = (event, context, callback) => {
  // Stub the succeed method, map it to the callback.
  context.succeed = result => callback(null, result);

  // Run the proxy.
  awsServerlessExpress.proxy(server, event, context)
}
