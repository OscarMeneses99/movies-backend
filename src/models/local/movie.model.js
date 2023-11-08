import crypto from 'crypto'
import { readJSON } from "../../utils/readFile.js"
const movies = readJSON('../movies.json')

export class MovieModel {

    static async getAll({ genre, title }) {
        if (title) {
            return movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
        }
        if (genre) {
            return movies.filter(movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()))
        }
        return movies
    }

    static async getById({ id }) {
        return movies.find(movie => movie._id === id)
    }

    static async create({ result: movie }) {
        const newMovie = {
            _id: crypto.randomUUID(),
            ...movie.data
        }
        movies.push(newMovie)
        return newMovie
    }

    static async update({ id, result }) {
        const movieIndex = movies.findIndex(movie => movie._id === id)
        if (movieIndex === -1) return false

        movies[movieIndex] = {
            ...movies[movieIndex],
            ...result.data
        }

        return movies[movieIndex]
    }

    static async delete({ id }) {
        const movieIndex = movies.findIndex(movie => movie._id === id)
        if (movieIndex === -1) return false

        movies.splice(movieIndex, 1)
        return true
    }
}