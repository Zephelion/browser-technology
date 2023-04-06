import express from 'express';
import { index, introduction, storePersonalInfo, subject, storeAnswers } from '../controller/enqueteController.js';
const router = express.Router();


router.get('/', index);
router.get('/introduction', introduction);
router.get('/subject/:id', subject);
router.post('/introduction', storePersonalInfo);
router.post('/subject/:id', storeAnswers)



export default router;