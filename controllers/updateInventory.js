import connection from "../utils/mysql.js";

export const updateInventory = async (req, res) => {
  const { id } = req.params;

  const { warehouse_id, item_name, description, category, status, quantity } =
    req.body;

  if (
    !warehouse_id ||
    !item_name ||
    !description ||
    !category ||
    !status ||
    !quantity
  ) {
    return res.status(400).send({ error: "All fields are required." });
  }
  if (typeof quantity !== "number" || isNaN(quantity)) {
    return res.status(400).json({ error: "Quantity must be a number" });
  }

  try {
    const sql = `UPDATE inventories 
            SET 
            warehouse_id = ?,
            item_name = ?,
            description = ?,
            category = ?,
            status = ?,
            quantity = ?
            WHERE id = ?`;

    await connection.query(sql, [
      warehouse_id,
      item_name,
      description,
      category,
      status,
      quantity,
      id,
    ]);

    const sql2 = "SELECT * FROM inventories WHERE id = ?";
    const [inventory] = await connection.query(sql2, [id]);

    if (inventory.length === 0) {
      return res.sendStatus(404);
    }
    return res.status(201).json(inventory[0]);
  } catch (error) {
    return res.status(400).send(error);
  }
};
