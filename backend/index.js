import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import noteRoutes from './routes/noteRoutes.js'
import cors from 'cors'

dotenv.config()

const app = express()
const port = process.env.PORT || 4002

app.get('/' ,(req,resp) =>{
    resp.send('Hello World!')
})

//database connection code
try {
    mongoose.connect(process.env.MONGO_URI)
    console.log('Database connected successfully')
} catch (error) {
    console.log('Database connection failed', error)
    
}

//routing middleware
app.use(express.json())
app.use(cors())
app.use('/api/vi1/notes', noteRoutes)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})