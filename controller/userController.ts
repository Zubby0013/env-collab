import { Request, Response } from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import userModel from "../model/userModel";


export const createUser = async(req:Request, res:Response)=>{
    try {
        const {name, email, password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);
    
        const token = crypto.randomBytes(3).toString("hex");
    
        const user = userModel.create({
          name,
          email,
          password: hashed,
          token,
          avatar: "",
        });
        return res.status(404).json({
            message: " creating user successfully",
            data: user
        });
    } catch (error) {
        return res.status(404).json({
            message: "error while creating user"
        });
    }
} ;

export const viewOneUser = async(req:Request, res:Response)=>{
    try {
        const {userID} = req.params;
    
        const user = userModel.findById(userID);
        return res.status(404).json({
            message: " view user successfully",
            data: user
        });
    } catch (error) {
        return res.status(404).json({
            message: "error while view one user"
        });
    }
} ;

export const viewAllUser = async(req:Request, res:Response)=>{
    try {
        const user = userModel.find();
        return res.status(404).json({
            message: " creating user successfully",
            data: user
        });
    } catch (error) {
        return res.status(404).json({
            message: "error while creating user"
        });
    }
} ;