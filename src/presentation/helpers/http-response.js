const MissingParameterError = require('./missing-parameter-error')
const UnauthorizedError = require('./unauthorized-error')

module.exports = class HttpResponse {
  static badRequest (parameter) {
    return {
      statusCode: 400,
      body: new MissingParameterError(parameter)
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }

  static unauthorizedError () {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }

  static ok () {
    return {
      statusCode: 200
    }
  }
}
