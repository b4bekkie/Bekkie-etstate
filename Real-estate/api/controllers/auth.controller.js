import User from "../models/user.model.js";

export const signup =  ( async (req,res)=>{

    const {username,email,password} = req.body;

    const newUser = new User({username,email,password});
   await newUser.save();
   res.status(404).json('user created successfully at db')





})