import {Router} from "express";
import User from '../models/User.js';
import {registration, login ,getme} from '../controllers/auth.js'
const router= new Router()

router.post('/registration',registration)
router.post('/login',login)
router.get('/me',getme)
export default router;