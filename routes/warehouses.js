import express from 'express';
import { postWarehouse } from '../controllers/postWarehouse.js';
import { getAllWarehouses } from '../controllers/getAllWarehouses.js';
import { upadateWarehouse } from '../controllers/updateWarehouse.js';
import { deleteWarehouse } from '../controllers/deleteWarehouse.js';
import { getSingleWareHouse } from '../controllers/getSingleWarehouse.js';

const warehousesRouter = express.Router();
warehousesRouter.route('/').get(getAllWarehouses).post(postWarehouse);
warehousesRouter
  .route('/:id')
  .get(getSingleWareHouse)
  .patch(upadateWarehouse)
  .delete(deleteWarehouse);

export default warehousesRouter;
