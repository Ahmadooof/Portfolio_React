import cors from "cors";
import express from "express";
import projectRouter from './api/projects.route.js';

const app = express()

// Routes
app.use(cors())
// app.use('/projects', router)
// our server can accept json in the body of the request.
app.use(express.json())
// app.use("/api/v1/restaurants", restaurants)

app.use('/projects', projectRouter)

app.get('/', (req, res) => {
    res.send("we are on home")
});
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app