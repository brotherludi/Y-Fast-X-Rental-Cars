import express from 'express';
const router = express.Router();

// Import your database queries
import { getCarsForSale } from '../db/queries';

// Home Route - Fetch All Cars for Sale
router.get('/', async (req, res) => {
  try {
    const carsForSale = await getCarsForSale();
    res.json(carsForSale);
  } catch (error) {
    console.error('Error fetching cars for sale:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
