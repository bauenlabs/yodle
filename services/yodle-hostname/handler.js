/**
 * @file yodle-hostname.js
 * Contains hostname API definition for Yodle.
 */

import express from 'express'
import serverless from 'serverless-http'
import fortune from 'fortune'
import fortuneHTTP from 'fortune-http'
import fortuneMongo from 'fortune-mongodb'
import fortuneJsonAPI from 'fortune-json-api'

// Initialize fortune instance (Define schema and store).
const store = fortune({
  hostname: {
    name: String,
  }
}, {
  adapter: [
    fortuneMongo,
    { url: 'mongodb://localhost:27017/test' }
  ]
})

// Initialize an HTTP listener.
const listener = fortuneHTTP(store, {
  serializers: [
    [ fortuneJsonAPI ]
  ]
})

// Initialize app object.
const app = express()
app.use((request, response) =>
  listener(request, response)
  .catch(console.error))


module.exports.api = serverless(app)
