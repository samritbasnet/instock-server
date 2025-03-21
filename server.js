import express from 'express';
import cors from 'cors';
import warehousesRouter from './routes/warehouses.js';
import inventoryRouter from './routes/inventory.js';
import categoryRouter from './routes/category.js';
import 'dotenv/config';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8081;
app.use(cors());

app.use('/warehouses', warehousesRouter);
app.use('/inventories', inventoryRouter);
app.use('/categories', categoryRouter);

app.listen(PORT, function () {
  console.log(`Server is listening on PORT ${PORT}`);
});
