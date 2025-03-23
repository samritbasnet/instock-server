import connection from '../utils/mysql.js';

export const getInventoriesByWarehouse = async (req, res) => {
  const { id } = req.params;
  try {
    const [wareHouseResult] = await connection.query('SELECT * FROM warehouses WHERE id = ?', [id]);
    if (wareHouseResult.length < 1) {
      return res.status(404).json({ message: 'Warehouse not found' });
    }
    const [inventories] = await connection.query(
      'SELECT id, item_name, category, status, quantity FROM inventories WHERE warehouse_id = ?',
      [id]
    );
    return res.json(inventories);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Error fetching inventories' });
  }
};
