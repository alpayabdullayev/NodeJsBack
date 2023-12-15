
import express from 'express';
import { getAllMovies, createMovies,uptadeMovies,getMoviesById,deleteMovies } from '../controllers/moviesController.js';

const moviesRouter = express.Router();

moviesRouter.get('/', getAllMovies);

moviesRouter.post('/', createMovies);
moviesRouter.put('/:id', uptadeMovies);
moviesRouter.get('/:id', getMoviesById);
moviesRouter.delete('/:id', deleteMovies);

export default moviesRouter;
