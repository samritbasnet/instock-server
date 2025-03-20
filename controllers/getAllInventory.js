import connection from "../utils/mysql.js";

export const getAllInventory = async (_req, res) => {
  const sql =
    "SELECT inventories.*, warehouses.warehouse_name FROM inventories LEFT JOIN warehouses ON inventories.warehouse_id = warehouses.id;";

  try {
    const [results] = await connection.query(sql);
    res.json(results);
  } catch (error) {
    return res.status(400).send(error);
  }
};
