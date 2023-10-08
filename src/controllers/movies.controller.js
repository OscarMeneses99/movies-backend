//import movies from '../movies.json' assert/with { type: "json" } <-- Experimental
import { createRequire } from "node:module"
import crypto from "node:crypto"
import { validateSchema, validatePartialSchema } from "../schemas/movies.schema.js"
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

export const createMovie = (req, res) => {
    const result = validateSchema(req.body)

    if (!result.success) {
        return res.status(422).json({ errors: JSON.parse(result.error.message) })
    }

    const newMovie = {
        id: crypto.randomUUID(),
        ...result.data
    }

    movies.push(newMovie)

    return res.status(201).json(newMovie)
}

export const updateMovie = (req, res) => {
    const result = validatePartialSchema(req.body)
    if (!result.success) {
        return res.status(422).json({ errors: JSON.parse(result.error.message) })
    }

    const { id } = req.params
    const movieIndex = movies.findIndex(movie => movie.id === id)
    if (movieIndex === -1) {
        return res.status(404).json({ error: 'Movie not found' })
    }


    const updatedMovie = {
        ...movies[movieIndex],
        ...result.data
    }

    movies[movieIndex] = updatedMovie

    return res.json(updatedMovie)
}

export const deleteMovie = (req, res) => {
    const { id } = req.params
    const movieIndex = movies.findIndex(movie => movie.id === id)
    if (movieIndex === -1) {
        return res.status(404).json({ error: 'Movie not found' })
    }

    movies.splice(movieIndex, 1)

    return res.json({ message: 'Movie deleted' })
}

