//1. Import axios
import express from "express";

//5. Import the searchMovies controller function
import { searchMovies } from "../controllers/movieController.js";

// 2. Create a router
const router = express.Router();

// //4. Define a GET  route to retrieve movies - temporary test route.
// router.get("/movies",(req,res) => {
//     res.send("Here are the movies!");
// });

//6. Define a GET  route to retrieve movies - temporary test route.
router.get("/search", searchMovies);


// 3. Export the router
export default router;