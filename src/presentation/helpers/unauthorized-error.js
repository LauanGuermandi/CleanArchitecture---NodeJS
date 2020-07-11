module.exports = class UnauthorizedError extends Error {
  constructor (parameter) {
    super('Unauthorized')
    this.name = 'UnauthorizedError'
  }
}
