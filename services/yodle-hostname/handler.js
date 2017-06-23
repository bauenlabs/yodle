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

const server = awsServerlessExpress.createServer(app)
module.exports.api = (event, context) => awsServerlessExpress.proxy(server, event, context)
