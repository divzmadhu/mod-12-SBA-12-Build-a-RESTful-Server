//1. import axios 
import axios from "axios"

//2. Create a controller function to search movies
const searchMovies = async (req, res) => {

    try {
        // 3. Get the movie title from the incoming request
        const title = req.query.title;

        // 4. Send a GET request to OMDb using Axios
        const response = await axios.get("https://www.omdbapi.com/", {
            params: {
                apikey: process.env.OMDB_API_KEY,
                s: title
            }
        });

        // 5. Send the movie data back to the client
        res.json(response.data);


    } catch (error) {

        console.error(error.message);

        res.status(500).json({
            message: "Failed to fetch movies"
        });

    }
};

// 6. Export the controller function
export { searchMovies };

   

    


