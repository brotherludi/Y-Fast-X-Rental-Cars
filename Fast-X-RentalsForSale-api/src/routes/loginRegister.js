import { Router } from 'express';
const router = Router();
import { registerUser } from './db/queries';

// Login/Register Route - Register a New User
router.post('/register', async (req, res) => {
  const userData = req.body;
  try {
    const newUser = await registerUser(userData);
    res.json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
