import connection from '../utils/mysql.js';

export const getSingleWareHouse = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const sql = ' SELECT  * from warehouses WHERE id=?';
  if (!id) {
    return res.status(404);
  }
  try {
    const [results] = await connection.query(sql, [id]);
    console.log(results);
    if (results.length < 1) {
      return res.sendStatus(404);
    }
    return res.json(results);
  } catch (error) {
    return res.status(400).send(error);
  }
};
