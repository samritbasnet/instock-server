import express from "express";
import cors from "cors";
import "dotenv/config";
import connection from "./utils/mysql.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8081;
app.use(cors());

app.get("/", async (_req, res) => {
  const sql = "SELECT * FROM inventories;";

  try {
    const [results] = await connection.query(sql);
    res.json(results);
  } catch (error) {
    return res.status(400).send(error);
  }
});

app.listen(PORT, function () {
  console.log(`Server is listening on PORT ${PORT}`);
});
