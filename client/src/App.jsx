import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [movies, setmovies] = useState([])
  const [category, setCategory] = useState([])

  async function getMovies() {
    try {
      const data = await fetch("http://localhost:8800/movies")
      const res = await data.json() 
      setmovies(res)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategories() {
    try {
      const data = await fetch("http://localhost:8800/categories")
      const res = await data.json() 
      console.log(res);
      setCategory(res)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies()
    getCategories()
  }, [])
  

  const getCategoryNamesForMovie = (movie) => {
    return movie.category.map((categoryId) => {
      const foundCategory = category.find((category) => category._id === categoryId);
      return foundCategory ? foundCategory.name : '';
    });
  };

  return (
    <>
     <div>
      {
        movies.map((movie)=>(
          <div>
            <h1>{movie.name}</h1>
            <p> <p>Categories: {getCategoryNamesForMovie(movie).join(', ')}</p></p>
            <p>{movie.category}</p>
          </div>
        ))
      }
     </div>
    </>
  )
}

export default App


