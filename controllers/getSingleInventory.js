import connection from "../utils/mysql.js";

export const getSingleInventory = async (req, res) => {
  const { id } = req.params;
  const sql =
    "SELECT inventories.*, warehouses.warehouse_name FROM inventories LEFT JOIN warehouses ON inventories.warehouse_id = warehouses.id WHERE inventories.id = ?;";

  if (!id) {
    return res.status(404);
  }

  try {
    const [results] = await connection.query(sql, [id]);
    if (results.length < 1) {
      return res.sendStatus(404);
    }
    return res.json(results);
  } catch (error) {
    return res.status(400).send(error);
  }
};
