import express from "express";
import { userRegister } from "../controllers/user.js";

const router=express.Router()

//Register
router.post("/register",userRegister)
router.post("/login",userRegister)


export default router;