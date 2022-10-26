import Express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';

const seedRouter = Express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
});
export default seedRouter;
