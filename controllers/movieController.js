//1. import axios 
import axios from "axios"

//2. Create a controller function to search movies
const searchMovies = async (req, res) => {

    try {
        // 3. Get the movie title from the incoming request
        const title = req.query.title;

        // 4. Check whether the title was provided
        if (!title) {
            return res.status(400).json({
                error: "Title query parameter is required"
            });
        }

        // 5. Send a GET request to OMDb using Axios
        const response = await axios.get("https://www.omdbapi.com/", {
            params: {
                apikey: process.env.OMDB_API_KEY,
                s: title
            }
        });

        // Check whether OMDb returned an error
        if (response.data.Response === "False") {
            return res.status(404).json({
                error: response.data.Error
            });
        }

        // 6. Send the movie data back to the client
        res.json(response.data);


    } catch (error) {

        console.error(error.message);

        res.status(500).json({
            message: "Failed to fetch movies"
        });

    }
};

// 8. Create a controller function to get movie details
const getMovieDetails = async (req, res) => {
    try {
        // 9. Get the movie title from the incoming request
        const id = req.params.id;

        // 10. Check whether the IMDb ID was provided
        if (!id) {
            return res.status(400).json({
                error: "IMDb ID path parameter is required"
            });
        }


        // 11. Send a GET request to OMDb using Axios
        const response = await axios.get("https://www.omdbapi.com/", {
            params: {
                apikey: process.env.OMDB_API_KEY,
                i: id
            }
        });

        // Check whether OMDb returned an error
        if (response.data.Response === "False") {
            return res.status(404).json({
                error: response.data.Error
            });
        }

        // 12. Send the movie details back to the client
        res.json(response.data);


    } catch (error) {

        console.error(error.message);

        res.status(500).json({
            message: "Failed to fetch movies"
        });

    }



};

// // 7. Export the controller function
// export { searchMovies };

// //13. Export the controller function
// export { getMovieDetails };

// 13. Export both controller functions
export { searchMovies, getMovieDetails };







