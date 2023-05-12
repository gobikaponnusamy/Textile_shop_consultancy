import express from "express";
import asyncHandler from "express-async-handler";
import categoryModel from "../Models/categoryModel.js";
import ProductModel from "../Models/ProductModel.js";
import { admin, protect } from "../Middleware/AuthMiddleware.js";
const categoryRoute = express.Router();

categoryRoute.post(
  "/",
  asyncHandler(async (req, res) => {
    const { categoryName } = req.body;
    console.log(req.body);
    console.log(categoryName);
    const newCategory = new categoryModel({
      categoryName,
    });
    const categorycreated = await newCategory.save();
    res.status(201).json(categorycreated);
  })
);

categoryRoute.get(
  "/all",
  // protect,
  // admin,
  asyncHandler(async (req, res) => {
    const orders = await categoryModel.find({});
    // .sort({ _id: -1 })
    // .populate("user", "id name email");
    res.json(orders);
  })
);

categoryRoute.delete(
  "/:id",
  // protect,
  // admin,
  asyncHandler(async (req, res) => {
    const category = await categoryModel.findById(req.params.id);
    const findcategory = category.categoryName;
    if (category) {
      await category.remove();
      await ProductModel.deleteMany({ category: findcategory });
      res.json({ message: "category deleted" });
    } else {
      res.status(404);
      throw new Error("category not Found");
    }
    res.send("sucess");
  })
);
export default categoryRoute;
