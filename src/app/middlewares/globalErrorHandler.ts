/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express'

const globalErorrHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(404).json({
    success: false,
    message: err.message,
  })
}

export default globalErorrHandler
