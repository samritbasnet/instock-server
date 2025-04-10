import express from "express";
import {postInventory} from "../controllers/postInventory.js"
import { getAllInventory } from "../controllers/getAllInventory.js";
import { getSingleInventory } from "../controllers/getSingleInventory.js";
import { updateInventory } from "../controllers/updateInventory.js";
import { deleteInventoryItem } from "../controllers/deleteInventoryItem.js";

const inventoryRouter = express.Router();

inventoryRouter.route("/").get(getAllInventory).post(postInventory);
inventoryRouter
  .route("/:id")
  .get(getSingleInventory)
  .patch(updateInventory)
  .delete(deleteInventoryItem);

export default inventoryRouter;
