import express from 'express'
import cors from 'cors'
import appRoutes from './app/routes'
import globalErorrHandler from './app/middlewares/globalErrorHandler'
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', appRoutes)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(globalErorrHandler)
export default app
