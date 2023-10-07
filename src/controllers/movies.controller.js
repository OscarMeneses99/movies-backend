//import movies from '../movies.json' assert/with { type: "json" } <-- Experimental
import { createRequire } from "node:module"
const require = createRequire(import.meta.url)
const movies = require("../movies.json")


export const getMovies = (req, res) => {
    const { title, genre } = req.query
    if (title) {
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
        return res.json(filteredMovies)
    }
    if (genre) {
        const filteredMovies = movies.filter(movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()))
        return res.json(filteredMovies)
    }
    return res.json(movies)
}

export const getMovie = (req, res) => {
    const { id } = req.params
    const movie = movies.find(movie => movie.id === id)
    if (!movie) {
        return res.status(404).json({ error: 'Movie not found' })
    }

    return res.json(movie)
}

