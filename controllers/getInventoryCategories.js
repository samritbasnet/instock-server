import connection from "../utils/mysql.js";

export const getInventoryCategories = async (_req, res) => {
	const sql = "SELECT GROUP_CONCAT(DISTINCT category) AS categories FROM inventories";

	try {
		const [results] = await connection.query(sql);

		if (results.length < 1) {
			return res.sendStatus(404);
		}

		const formattedResults = results[0].categories.split(",");

		return res.json(formattedResults);
	} catch (error) {
		return res.status(400).send(error);
	}
};
