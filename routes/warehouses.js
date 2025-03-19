import express from "express";

import { postWarehouse } from "../controllers/postWarehouse.js";
import { getAllWarehouses } from "../controllers/getAllWarehouses.js";

const warehousesRouter = express.Router();

warehousesRouter
	.route("/")
	.get(getAllWarehouses)
	.post(postWarehouse)
	.delete((req, res) => {
		return res.send();
	});

export default warehousesRouter;
