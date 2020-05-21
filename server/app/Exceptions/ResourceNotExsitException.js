'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ResourceNotExsitException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (err, { response }) {
    return response.status(404).json({
      error: "resource doesn't exist"
    })
  }
}

module.exports = ResourceNotExsitException
