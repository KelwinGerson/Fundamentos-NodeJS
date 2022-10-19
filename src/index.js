const express = require("express")

const app = express()

app.get("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2"])
});

app.post("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3"])
});

app.put("/courses/:id", (request, response) => {
    return response.json(["Curso 5", "Curso 2", "Curso 3"])
});

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 5", "Curso 2", "Curso 7"])
});

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 2", "Curso 7"])
});



// start application. Especify port from run; // localhost:4444

app.listen(4444, () => {
    console.log("Listening port 4444")
})