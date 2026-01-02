import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoutes.js"
import movieRoutes from "./routes/movieRoutes.js"

dotenv.config()
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/movies", movieRoutes)

app.get("/",(req,res)=>{
    res.send("Backend is working")
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongoose is connected")
}).catch(errro=>{
    console.log(errro)
})

const  PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Runnning in http://localhost:${PORT}`)
})
