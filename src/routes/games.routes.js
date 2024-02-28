import { Router } from "express";
import {getAll, getOne, insertOne, updateOne, deleteOne} from "../controllers/games.controllers.js"

const router = Router();

router.get('/', getAll);

router.get('/:barcode', getOne);

router.post('/', insertOne);

router.post('/:barcode', updateOne);
router.put('/:barcode', updateOne);

router.get('/delete/:barcode', deleteOne);

export default router;  

