import express from "express";

import { postWarehouse } from "../controllers/postWarehouse.js";
import { getAllWarehouses } from "../controllers/getAllWarehouses.js";
import { deleteWarehouse } from "../controllers/deleteWarehouse.js";

const warehousesRouter = express.Router();

warehousesRouter.route("/").get(getAllWarehouses).post(postWarehouse);
warehousesRouter.route("/:id").delete(deleteWarehouse);

export default warehousesRouter;
