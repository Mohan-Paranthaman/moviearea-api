import express from 'express'
import { MovieCreate, MovieDelete, MovieDetail, MovieIndex, MovieUpdate } from '../controllers/movies.controller.js';

const router = express.Router();


//R - for Reading
router.get('/',MovieIndex);

router.get("/:id",MovieDetail);

//C - for Creating movies
router.post('/',MovieCreate);

//U for updating movies
router.put('/:id',MovieUpdate)

//D - for deleting movies 
router.delete('/:id',MovieDelete)

export default router;