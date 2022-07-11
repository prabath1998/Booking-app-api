import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been registered successfully");
  } catch (error) {
    next(error);
    
  }
};
