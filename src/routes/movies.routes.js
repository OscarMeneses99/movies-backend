import { Router } from "express"
import { getMovies, getMovie} from "../controllers/movies.controller.js"

const router = Router()

//endpoints
router.get('/movies', getMovies)
router.get('/movies/:id', getMovie)

export default router