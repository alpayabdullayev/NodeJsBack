import  express  from "express";
import Categories from "../model/categoryModel.js"

//GET
export const getAllCategories = async (req, res) => {
    try {
      const category = await Categories.find({})
      res.send(category);
    } catch (error) {
      res.status(500).json({ message: error });
    }
};

//POST
export const createCategory = async (req, res) => {
    try {
      const category = new Categories(req.body);
      await category.save();
      res.status(200).json({ message: "category yarandi" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
};