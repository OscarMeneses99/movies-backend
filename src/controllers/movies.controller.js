
import { validateSchema, validatePartialSchema } from "../schemas/movies.schema.js"
import { MovieModel } from "../models/movie.model.js"

export class MovieController {
    static async getMovies(req, res) {
        const { title, genre } = req.query
        const movies = await MovieModel.getAll({ title, genre })
        return res.json(movies)
    }

    static async getMovie(req, res) {
        const { id } = req.params
        const movie = await MovieModel.getById({ id })
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' })
        }

        return res.json(movie)
    }

    static async createMovie(req, res) {
        const result = validateSchema(req.body)

        if (!result.success) {
            return res.status(422).json({ errors: JSON.parse(result.error.message) })
        }
        const movie = await MovieModel.create({ result })
        return res.status(201).json(movie)
    }

    static async updateMovie(req, res) {
        const { id } = req.params
        const result = validatePartialSchema(req.body)
        if (!result.success) {
            return res.status(422).json({ errors: JSON.parse(result.error.message) })
        }
        const updatedMovie = await MovieModel.update({ id, result })
        if (!updatedMovie) {
            return res.status(404).json({ error: 'Movie not found' })
        }
        return res.json(updatedMovie)
    }

    static async deleteMovie(req, res) {
        const { id } = req.params

        const result = await MovieModel.delete({ id })

        if (result === false) {
            return res.status(404).json({ error: 'Movie not found' })
        }

        return res.json({ message: 'Movie deleted' })

    }
}

