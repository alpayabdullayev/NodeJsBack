import express from "express";
import MovieModel from "../model/moviesModel.js";

export const getAllMovies = async (req, res) => {
  try {
    const movies = await MovieModel.find({});
    res.send(movies);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getMoviesById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await MovieModel.findById(id);
    res.send(movie);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createMovies = async (req, res) => {
  try {
    const movie = new MovieModel(req.body);
    await movie.save();
    res.status(200).json({ message: "movie yarandi" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const uptadeMovies = async (req, res) => {
  const { id } = req.params;
  try {
    const movies = await MovieModel.findByIdAndUpdate(id, req.body);
    if (movies) {
      await movies.save();
      res.json({ message: "deyisiklik edildi" });
    } else {
      res.status(404).json({ message: "tapmadi" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteMovies = async (req, res) => {
  try {
   const movie= await MovieModel.findByIdAndDelete(req.params.id)
    res.send(movie)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
