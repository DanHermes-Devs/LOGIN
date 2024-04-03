import express from 'express';
import { insertStatusAgent } from '../controllers/loginController.js';
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/logout', (req, res) => {
    res.render('logout')
});

router.post('/insert-login-to-agent', insertStatusAgent);

export default router;