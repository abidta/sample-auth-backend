import express from 'express'
import{getuser} from '../controllers/userControllers.js'
const router = express.Router()
router.get('/',getuser)
export default router