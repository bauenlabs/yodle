/**
 * @file yodle-hostname.js
 * Contains hostname API definition for Yodle.
 */

import APIService from '../../lib/APIService'

const service = new APIService()
module.exports.api = service.get
