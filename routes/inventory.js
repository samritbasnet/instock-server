import express from "express";
import connection from "../utils/mysql.js";

const inventoryRouter = express.Router();

inventoryRouter.get("/", async (_req, res) => {
  const sql = "SELECT * FROM inventories;";

  try {
    const [results] = await connection.query(sql);
    res.json(results);
  } catch (error) {
    return res.status(400).send(error);
  }
});

export default inventoryRouter;
