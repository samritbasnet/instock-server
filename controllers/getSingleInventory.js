import connection from "../utils/mysql.js";

export const getSingleInventory = async (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM inventories WHERE id = ?";
  console.log(id);
  try {
    const [results] = await connection.query(sql, [id]);
    res.json(results);
  } catch (error) {
    return res.status(400).send(error);
  }
};
