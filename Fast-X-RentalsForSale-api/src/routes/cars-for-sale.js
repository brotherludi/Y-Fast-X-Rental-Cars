const router = require("express").Router();

import { getCarsForSale } from './db/queries';

// Cars for Sale Route - Fetch All Cars for Sale
router.get('/cars-for-sale', async (req, res) => {
  try {
    const carsForSale = await getCarsForSale();
    res.json(carsForSale);
  } catch (error) {
    console.error('Error fetching cars for sale:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;


