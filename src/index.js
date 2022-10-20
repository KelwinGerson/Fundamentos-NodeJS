const express = require("express")

const app = express()

// midleware
app.use(express.json())


app.get("/courses", (request, response) => {
    const query = request.query;
    console.log(query)
    return response.json(["Curso 1", "Curso 2"])
});

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body)
    return response.json(["Curso 1", "Curso 2", "Curso 3"])
});

app.put("/courses/:id", (request, response) => {
    const { id } = request.params;
    console.log(id)
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