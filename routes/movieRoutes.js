//1. Import express
import express from "express";



//8.  Import the movie controller functions - Combine the functions in 1 line
import { searchMovies, getMovieDetails } from "../controllers/movieController.js";



// 2. Create a router
const router = express.Router();


//6. Define a GET  route to retrieve movies - temporary test route.
router.get("/search", searchMovies);

//9. Define a GET route to get movie details using IMDb ID
router.get("/movies/:id", getMovieDetails);


// 3. Export the router
export default router;


