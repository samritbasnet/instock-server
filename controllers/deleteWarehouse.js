import connection from "../utils/mysql.js";

export const deleteWarehouse = async (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).send({ error: "Please select an id." });
	}

	try {
		const warehouseSql = "DELETE FROM warehouses WHERE id = ?";
		const [results] = await connection.query(warehouseSql, [id]);

		const { affectedRows } = results;

		if (affectedRows < 1) {
			return res.status(404).send({ error: "Warehouse not found to delete." });
		}

		return res.status(204).send({ message: "Successfully deleted warehouse." });
	} catch (err) {
		console.error(err);
		return res.status(500).send(err);
	}
};
