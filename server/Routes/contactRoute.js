import express from "express";
import asyncHandler from "express-async-handler";
import Contact from "../Models/contactModel.js";
const contactRoute = express.Router();
contactRoute.post(
  "/",
  asyncHandler(async (req, res) => {
    const newques=new Contact(req.body);
    try{
        const savedreq= await newques.save()
        res.status(200).json(savedreq);
    }
    catch(err)
    {
        next(err);
    }
  })
);
export default contactRoute;