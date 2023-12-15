import express from "express";
import { getAllCategories, createCategory } from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategories);

categoryRouter.post('/', createCategory);

export default categoryRouter;