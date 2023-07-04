import User from "../models/userModel.js";
import asH from "express-async-handler";
import generateToken from "../utils/tokenGenerate.js";

export const signup = (req, res, next) => {
  console.log("api");
  console.log(req.body);
  const { name, email, password } = req.body;

  User.create({
    name,
    email,
    password,
  })
    .then((user) => {
      res.send(`user${user.name} created success`);
    })
    .catch(next);
};
export const loginUser = asH(async (req, res, next) => {
  const { email, password } = req.body;
  let [user] = await User.find({ email });

  if (user) {
    if (!(await user.matchPassword(password))) {
      res.status(401);
      throw new Error("Incorrect Password");
    }
    res.cookie("token", generateToken(user._id)).send("success");
    console.log("abid");
  } else {
    res.status(401);
    throw new Error("NO user found");
  }
});
export const logout = (req,res,next)=>{
  res.clearCookie('token')
  res.send('logouted')
}
