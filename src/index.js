const express = require("express")

const app = express()


//
app.get("/", (request, response) => {
    return response.json({message: "Hello world!"})
})

// start application. Especify port from run;
// localhost:4444
app.listen(4444, () => {
    console.log("Listening port 4444")
})