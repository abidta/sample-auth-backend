import express from "express";
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import {connectDb} from './config/db.js'
import {errorHandler,notFound} from './middlewares/errorMiddleware.js'
import authRoutes from'./routes/authRoutes.js'
import usersRoutes from './routes/userRoutes.js'
import logger from 'morgan'
import { verifyToken } from "./middlewares/authMiddleware.js";

dotenv.config()
connectDb()

// import path from 'path'
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const port=process.env.PORT||3000;

const app= express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(logger('tiny'))


app.use('/auth', authRoutes);
app.use('/users',verifyToken, usersRoutes);

//view engin setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`server listening in : ${port}`);
})