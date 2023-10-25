import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import Jwt from "jsonwebtoken";

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
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) return next(errorHandler(404, 'User not found!'));
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
      const token =  Jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = validUser._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } catch (error) {
      next(error);
    }
}