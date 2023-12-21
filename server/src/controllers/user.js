import Users from "../model/user.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
//Register
export const userRegister = async (req, res) => {
  const user = await Users.findOne({ userName: req.body.userName });

  if (user) {
    res.status(400).json({ message: "user already exist" });
  } else {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new Users({
        userName: req.body.userName,
        password: hashedPassword,
        role: req.body.role,
      });
      await newUser.save();
      return res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};

//Login
export const userLogin = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await Users.findOne({ userName });
    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    
    res.status(500).json({ error: 'Login failed' });
  }
};
