import express from 'express'
import { addProperty, getProperties, getSingleProperty, updateProperty, deleteProperty, search, pagination } from '../controller/listAddController.js'

const router = express.Router()

router.post("/add", addProperty)
router.get("/", getProperties)
router.get('/search', search)
router.get('/pagination', pagination)
router.get("/:id", getSingleProperty)
router.put("/:id", updateProperty)
router.delete("/:id", deleteProperty)



export default router;