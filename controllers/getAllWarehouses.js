import connection from "../utils/mysql.js";

export const getAllWarehouses = async (_req, res) => {
	const sql = "SELECT * FROM warehouses;";

	try {
		const [results] = await connection.query(sql);
		return res.json(results);
	} catch (error) {
		return res.status(400).send(error);
	}
};
