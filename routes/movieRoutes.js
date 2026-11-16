import express from "express";

// 2. Create a router
const router = express.Router();

//4. Define a GET  route to retrieve movies
router.get("/movies",(req,res) => {
    res.send("Here are the movies!");
});

// 3. Export the router
export default router;