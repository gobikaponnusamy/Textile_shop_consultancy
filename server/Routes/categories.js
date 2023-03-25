import express from "express";
import asyncHandler from "express-async-handler";
import categoryModel from "../Models/categoryModel.js";
import { admin, protect } from "./../Middleware/AuthMiddleware.js";
const categoryRoute = express.Router();

categoryRoute.post(
  "/",
  asyncHandler(async (req, res) => {
    const  {categoryName}  = req.body;
    console.log(req.body);
    console.log(categoryName);
    const newCategory = new categoryModel({
      categoryName,
    });
    const categorycreated = await newCategory.save();
    res.status(201).json(categorycreated);
  })
);

// categoryRoute.get("/");
export default categoryRoute;
