import express from 'express'
import cors from 'cors'
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config()
app.use(cors());

mongoose.connect(process.env.MONGOSE)
.then( ()=>{
    console.log('Connected to DataBase')
})
.catch((e)=>{
 console.log(e)
})

app.use(express.json())


app.listen(3000,()=>{
    console.log('app is running on port 3000') //app is listening on port 3000
})


app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
