import express from "express";

import { getAllInventory } from "../controllers/getAllInventory.js";
import { getSingleInventory } from "../controllers/getSingleInventory.js";
import { updateInventory } from "../controllers/updateInventory.js";

const inventoryRouter = express.Router();

inventoryRouter.route("/").get(getAllInventory);
inventoryRouter.route("/:id").get(getSingleInventory);
inventoryRouter.route("/:id").patch(updateInventory);

export default inventoryRouter;
