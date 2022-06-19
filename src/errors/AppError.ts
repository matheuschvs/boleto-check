class AppError {
  private readonly _message: string
  private readonly _statusCode: number

  constructor(message: string, statusCode: number = 400) {
    this._message = message
    this._statusCode = statusCode
  }

  get message() {
    return this._message
  }

  get statusCode() {
    return this._statusCode
  }
}

export { AppError }
