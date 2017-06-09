/**
 * @file hostname.js
 * Exports hostname mode.
 */

export const = {
  title: jsonapi.Joi.string(),
  url: jsonapi.Joi.string().uri(),
  height: jsonapi.Joi.number().min(1).max(10000).precision(0),
  width: jsonapi.Joi.number().min(1).max(10000).precision(0)
}
