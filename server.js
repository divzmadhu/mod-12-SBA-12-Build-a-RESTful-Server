// 1. Import Express
import express from "express";

//6. importing from dotenv
import dotenv from "dotenv";

//10. import movie routes
import movieRoutes from "./routes/movieRoutes.js"

// 7. Load environment variables from .env
dotenv.config();

//8. Access the API key
const apiKey = process.env.OMDB_API_KEY;

// 9. Verify that the API key is loaded (without displaying it)
console.log("OMDb API Key loaded:", Boolean(apiKey));


// 2. Create an Express application
const app = express();

//11. Mount movie routes at /api
app.use("/api", movieRoutes);


// 3. Define a port
const port = 3000;

// 4. Create a basic GET route //app.get(Path,callback)
app.get("/", (req, res) => {

    res.send("Hello! Express server is running.");
});

// 5. Start the server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
