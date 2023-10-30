import { Router } from "express"
import { MovieController } from "../controllers/movies.controller.js"

const router = Router()

//endpoints
router.get('/', MovieController.getMovies)
router.get('/:id', MovieController.getMovie)
router.post('/', MovieController.createMovie)
router.patch('/:id', MovieController.updateMovie)
router.delete('/:id', MovieController.deleteMovie)

export default router