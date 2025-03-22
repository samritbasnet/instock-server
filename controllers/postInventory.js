import connection from '../utils/mysql.js';

export const postInventory = async (req, res) => {
  const { warehouse_id, item_name, description, category, status, quantity } = req.body;
  if (
    !warehouse_id ||
    !item_name ||
    !description ||
    !category ||
    !status ||
    quantity === undefined ||
    quantity === null
  ) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (typeof quantity !== 'number' || isNaN(quantity)) {
    return res.status(400).json({ error: 'Quantity must be valid number' });
  }
  try {
    const [warehouseResults] = await connection.query('SELECT * FROM warehouses WHERE id = ?', [
      warehouse_id,
    ]);

    if (warehouseResults.length === 0) {
      return res.status(400).json({ error: 'Invalid id Warehouse does not exist.' });
    }
    const sql = 'INSERT INTO inventories SET ?';
    const [results] = await connection.query(sql, {
      warehouse_id,
      item_name,
      description,
      category,
      status,
      quantity,
    });
    const insertId = results.insertId;

    const [inventory] = await connection.query('SELECT * FROM inventories WHERE id = ?', [
      insertId,
    ]);
    return res.status(201).json(inventory[0]);
  } catch (err) {
    console.error(err);
    return res.status(400).send();
  }
};
