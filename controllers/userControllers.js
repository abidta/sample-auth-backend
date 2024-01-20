import User from "../models/userModel.js";
export const getuser = async (req, res, next) => {
  console.log("login success");
  let users = await User.find({}).select("-password");
  console.log(users);
  res.json(users);
};
