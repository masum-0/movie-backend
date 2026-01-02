import Movie from "../models/movieModel.js"

export const createMovie = async (req, res) => {
  const movie = await Movie.create({
    ...req.body,
    createdBy: req.user._id
  })
  res.status(201).json(movie)
}

export const getMovies = async (req, res) => {
  const movies = await Movie.find().populate("createdBy", "username")
  res.json(movies)
}


export const updateMovies = async (req, res) => {
  try {
    const { movieId } = req.params

    const movie = await Movie.findById(movieId)

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found"
      })
    }

    movie.title = req.body.title || movie.title
    movie.genre = req.body.genre || movie.genre
    movie.releaseYear = req.body.releaseYear || movie.releaseYear
    movie.rating = req.body.rating || movie.rating

    const updatedMovie = await movie.save()

    res.status(200).json({
      success: true,
      message: "Movie updated successfully",
      movie: updatedMovie
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const getMovieDetails = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" })
    }

    res.status(200).json(movie)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteMovies = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.movieId)

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" })
    }

    res.json({ success: true, message: "Movie deleted" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
