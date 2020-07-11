module.exports = class MissingParameterError extends Error {
  constructor (parameter) {
    super('Missing parameter: ' + parameter)
  }
}
