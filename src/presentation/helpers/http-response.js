const MissingParameterError = require('./missing-parameter-error')

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
}
