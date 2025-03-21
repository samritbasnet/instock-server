import connection from '../utils/mysql.js';

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone) => {
  const phoneRegex = /^\+?[1-9]\d{0,2}\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return phoneRegex.test(phone);
};

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
  if (!isValidPhone(contact_phone)) {
    return res.status(400).send({ error: 'Invalid phone number format.' });
  }
  if (!isValidEmail(contact_email)) {
    return res.status(400).send({ error: 'Invalid email address.' });
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
