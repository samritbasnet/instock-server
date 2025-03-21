import express from "express";
import connection from "../utils/mysql.js";
import { getInventoryCategories } from "../controllers/getInventoryCategories.js";

const categoryRouter = express.Router();

categoryRouter.route("/").get(getInventoryCategories);

export default categoryRouter;
