import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/DBConnect.js'
import userRoute from './routes/userRoute.js'
import cors from 'cors'
import masterRoute from './routes/masterRoutes.js'
import listAddRoute from './routes/listAddRoutes.js'
dotenv.config()

connectDB()

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/auth", userRoute)
app.use("/api", masterRoute)
app.use("/api", listAddRoute)

app.get("/", (req, res) => {
    res.send("API Running")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
