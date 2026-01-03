import express from "express"
import { createMovie, getMovies,getMovieDetails,deleteMovies,updateMovies} from "../controllers/movieController.js"
import { authenticate,adminOnly } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/", getMovies)
router.post("/", authenticate, createMovie)
router.get("/:id", getMovieDetails)
router.put("/:movieId", authenticate, adminOnly, updateMovies)
router.delete("/:movieId", authenticate, adminOnly, deleteMovies)

export default router
