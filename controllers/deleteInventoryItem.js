import connection from "../utils/mysql.js";

export const deleteInventoryItem = async (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).send({ error: "Please select an id." });
	}

	try {
		const inventorySql = "DELETE FROM inventories WHERE id = ?";
		const [results] = await connection.query(inventorySql, [id]);

		const { affectedRows } = results;

		if (affectedRows < 1) {
			return res.status(404).send({ error: "Inventory item not found to delete." });
		}

		return res.status(204).send("Successfully deleted inventory item.");
	} catch (err) {
		console.error(err);
		return res.status(500).send(err);
	}
};
