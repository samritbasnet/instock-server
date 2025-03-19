import validator from "validator";
import connection from "../utils/mysql.js";

export const postWarehouse = async (req, res) => {
	const { warehouse_name, address, city, country, contact_name, contact_position, contact_phone, contact_email } =
		req.body;

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
		return res.status(400).send({ error: "All fields are required." });
	}

	if (!validator.isMobilePhone(contact_phone, "any", { strictMode: false })) {
		return res.status(400).json({ error: "Invalid phone number." });
	}

	if (!validator.isEmail(contact_email)) {
		return res.status(400).json({ error: "Invalid email." });
	}

	try {
		const sql = "INSERT INTO warehouses SET ?";

		const [results] = await connection.query(sql, {
			warehouse_name,
			address,
			city,
			country,
			contact_name,
			contact_position,
			contact_phone,
			contact_email,
		});

		const insertId = results.insertId;

		const sql2 = "SELECT * FROM warehouses WHERE id = ?";

		const [warehouse] = await connection.query(sql2, [insertId]);

		return res.status(201).json(warehouse[0]);
	} catch (err) {
		console.error(err);
		return res.status(400).send();
	}
};
