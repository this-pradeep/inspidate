import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan';
import connectDB from './config/db.js';
import cors from 'cors'
// importing routes here
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()

const app = express();
app.use(cors())

const __dirname = path.resolve()
app.use(express.static(path.resolve(__dirname, 'uploads')))

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
  
app.use(express.json())

app.use('/api/users/', userRoutes)

app.listen(5000, ()=>{
    console.log(`Server is running on port: ${5000}`.bgGreen.underline.bold)
})