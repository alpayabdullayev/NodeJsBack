import express from "express";
import usersModel from "../model/usersModel.js";
import bcrypt from "bcrypt"

export const createUser = async (req,res)=>{
    try {
        const hashedPassword=await bcrypt.hash(req.body.password,10)
        const user=new usersModel({
            username:req.body.username,
            password:hashedPassword
        })
        await user.save();
        res.status(201).send("User Created")
    } catch (error) {
        res.status(200).json({message : error})
    }
}