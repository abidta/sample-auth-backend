import User from "../models/userModel.js"
export const getuser= async(req,res,next)=>{
 
 let users= await User.find({}).select('-password')
console.log(users);
res.json(users)

}