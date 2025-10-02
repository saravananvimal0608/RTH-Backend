import express from 'express'
import {masterDropDown , masterDropDownGet} from '../controller/masterController.js'

const router = express.Router();

router.post("/masterDropDown", masterDropDown)

router.get("/masterDropDownGet", masterDropDownGet)

export default router;