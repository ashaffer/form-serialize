/**
 * Imports
 */

var elements = require('form-elements')
var submittable = require('yields-submittable')
var square = require('squares')

/**
 * Serialize form
 */

function serialize (form) {
  return elements(form)
    .filter(submittable)
    .reduce(function(memo, control) {
      var value = control.value
      var name = control.name

      return square.set(memo, name, value)
    }, {})
}

/**
 * Exports
 */

module.exports = serialize