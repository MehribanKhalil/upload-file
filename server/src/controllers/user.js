// import Users from "../model/user.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// // USER REGISTER
// // export const userRegister= async (req, res) => {
// //     try {
// //       const hashedPassword = await bcrypt.hash(req.body.password, 10);
// //       const user = new Users({
// //         username: req.body.username,
// //         password: hashedPassword,
// //       });
// //       await user.save();
// //       res.send(user);
// //     } catch (error) {
// //       res.status(500).json({ message: error });
// //     }
// //   }

// export const userRegister = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const userExist = await Users.findOne({ email });
//     if (userExist) {
//     }
//     const user = new Users({
//       username: req.body.username,
//       password: hashedPassword,
//     });
//     await user.save();
//     res.send(user);
//   } 
//   catch (error) {
//     res.status(500).json({ message: error });
//   }
// };

// //USER LOGIN
// export const userLogin = async (req, res) => {
//   const {email,password}=req.body
//   try {
//     const user = await Users.findOne({ email: req.body.username });
//     if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
//       // req.session.userId = user._id;
//       // res.status(200).json({ message: "User sign in" });
//       return res.setatus(401).send("wrong user")
//     }
//     const token=jwt.sign({
//       userId:user._id
//     }, "secretKey")
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// };
