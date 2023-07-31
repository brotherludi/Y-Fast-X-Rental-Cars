import { Router } from 'express';
const router = Router();


// Contact Route
router.get('/contact', (req, res) => {
  res.json({ message: 'Contact us at support@fastxrentalsforsale.com' });
});

export default router;
