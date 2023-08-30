import express from 'express';
// eslint-disable-next-line import/extensions
import ProductController from '../controllers/ProductController.js';

const router = express.Router();

router.get('/purchase/:code', ProductController.getByCode);
router.get('/', ProductController.getAll);

export default router;
