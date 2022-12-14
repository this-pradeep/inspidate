import express from 'express';
import { changePassword, loginUser, passwordChangeLink, userSignup, verifyAccount } from '../controllers/userController.js';
const router  = express.Router()
router
.get('/signup',userSignup )
.get('/verifyAccount/:token', verifyAccount)
.post('/login',loginUser)
.post('/passwordChangeLink', passwordChangeLink)
.post('/changePassword/:token', changePassword)

export default router;