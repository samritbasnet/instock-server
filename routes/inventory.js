import express from "express";

import { getAllInventory } from "../controllers/getAllInventory.js";
import { getSingleInventory } from "../controllers/getSingleInventory.js";
import { deleteInventoryItem } from "../controllers/deleteInventoryItem.js";

const inventoryRouter = express.Router();

inventoryRouter.route("/").get(getAllInventory);
inventoryRouter.route("/:id").get(getSingleInventory).delete(deleteInventoryItem);

export default inventoryRouter;
