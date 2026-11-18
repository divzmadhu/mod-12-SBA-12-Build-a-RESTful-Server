# Movie Finder API

## Project Overview

The Movie Finder API is a RESTful API built using Node.js and Express. It connects to the OMDb API to search for movies and retrieve movie details.

This project acts as an intermediary between the client and OMDb. It does not store movie data locally.

## Technologies Used

- Node.js
- Express.js
- Axios
- dotenv
- OMDb API
- Nodemon

## Project Structure

```text
SBA-12/
├── controllers/
│   └── movieController.js
├── routes/
│   └── movieRoutes.js
├── server.js
├── .env
├── .gitignore
├── package.json
└── package-lock.json
```

## Functionalities Implemented

1. Search Movies: Users can search for movies by providing a movie title.
2. Get Movie Details: Users can get detailed information about a movie using its IMDb ID.
3. Input Validation: Added validation to check whether the movie title or IMDb ID is provided.
4. Error Handling: Used try/catch blocks to handle errors during API requests.
5. OMDb Response Handling: Checked the response from OMDb and handled cases where a movie could not be found.
6. Environment Variables: Used a .env file to store the OMDb API key instead of directly adding it to the code.
7. Nodemon: Configured Nodemon to automatically restart the server whenever I make changes during development.

## API Endpoints

### 1. Search Movies

**GET** `/api/search?title=batman`

Searches for movies using the provided title.

Example:

`http://localhost:3001/api/search?title=batman`

- Returns movie search results in JSON format.
- Returns HTTP 400 if the title is missing.
- Returns HTTP 404 if OMDb cannot find matching movies.

### 2. Get Movie Details

**GET** `/api/movies/:id`

Retrieves detailed information about a movie using its IMDb ID.

Example:

`http://localhost:3001/api/movies/tt0372784`

- Returns movie details in JSON format.
- Returns HTTP 404 if OMDb cannot find the movie.


## Error Handling and Validation

- Validates missing movie titles.
- Validates missing IMDb IDs.
- Handles unsuccessful responses from OMDb.
- Uses appropriate HTTP status codes.
- Includes try/catch blocks to handle API errors.

## Challenges I Faced

While working on this project, I faced a few challenges:
1. Understanding Routes and Controllers: Initially, I needed some time to understand how to separate routes and controller functions and how they work together. I learned how to connect the routes to the correct controller functions.
2. Environment Variables: I faced an issue with the OMDb API key because the variable name used in my code did not match the name in my .env file. This caused an authentication error. I fixed it by making sure both names matched.
3. Understanding Query Parameters and Path Parameters: I had to understand the difference between req.query and req.params. I learned that I use req.query.title to get the movie title from the search URL and req.params.id to get the IMDb ID from the URL.
4. Working with Axios and OMDb: I learned how to make GET requests using Axios and pass the required parameters to the OMDb API. I also learned that OMDb can return a response with "Response": "False" even when the HTTP request itself is successful, so I added additional error handling.

## Additional Improvements

- Configured Nodemon for automatic server restarts during development.
- Added handling for OMDb responses where `Response` is `"False"`.
- Returns appropriate error messages when movies cannot be found.


## What I Learned

Through this project, I learned how to:

- Build a RESTful API using Express.
- Organize code using routes and controllers.
- Use Axios to make external API requests.
- Work with query parameters and URL path parameters.
- Secure API keys using environment variables.
- Handle errors and validate incoming requests.