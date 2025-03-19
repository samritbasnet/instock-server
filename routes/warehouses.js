import express from "express";
import connection from "../utils/mysql.js";

const warehousesRouter = express.Router();

warehousesRouter.get("/", async (_req, res) => {
  const sql = "SELECT * FROM warehouses;";

  try {
    const [results] = await connection.query(sql);
    res.json(results);
  } catch (error) {
    return res.status(400).send(error);
  }
});

export default warehousesRouter;
