import connection from '../utils/mysql.js';
import validator from 'validator';

export const upadateWarehouse = async (req, res) => {
  const { id } = req.params;
  const {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  } = req.body;

  if (
    !warehouse_name ||
    !address ||
    !city ||
    !country ||
    !contact_name ||
    !contact_position ||
    !contact_phone ||
    !contact_email
  ) {
    return res.status(400).send({ errors: 'All fields are required.' });
  }

  if (!validator.isEmail(contact_email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }
  const stripped = contact_phone.replace(/\D/g, '');

  if (!validator.isMobilePhone(stripped, 'any', { strictMode: false })) {
    return res.status(400).json({ error: 'Invalid phone number.' });
  }

  try {
    const sql = `UPDATE warehouses
    SET 
    warehouse_name=?,
    address=?,
    city=?,
    country=?,
    contact_name=?,
    contact_position=?,
    contact_phone=?,
    contact_email=?
    WHERE id = ?
    `;
    await connection.query(sql, [
      warehouse_name,
      address,
      city,
      country,
      contact_name,
      contact_position,
      contact_phone,
      contact_email,
      id,
    ]);
    const sql2 = 'SELECT * FROM warehouses WHERE id= ?';
    const [warehouses] = await connection.query(sql2, [id]);
    if (warehouses.length < 1) {
      return res.sendStatus(404);
    }
    return res.status(201).json(warehouses[0]);
  } catch (error) {
    return res.status(400).send(error);
  }
};
