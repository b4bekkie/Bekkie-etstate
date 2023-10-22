import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup =   async (req,res,next)=>{

    const {username,email,password,whatsappNo} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10)

    const newUser = new User({username,email,password : hashedPassword,whatsappNo});
   await newUser.save();
   try {
    res.status(404).json('user created successfully at db')
    
   } catch (error) {
    next(error)
    
   }
   





}