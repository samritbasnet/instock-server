import express from "express";

import { getAllInventory } from "../controllers/getAllInventory.js";

const inventoryRouter = express.Router();

inventoryRouter.route("/").get(getAllInventory);

export default inventoryRouter;
