// 1. Import Express
import express from "express";

// 2. Create an Express application
const app = express();

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
