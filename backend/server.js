import cors from "cors";
import express from "express";


const app = express()


app.use(cors())
// app.use('/projects', router)
// our server can accept json in the body of the request.
app.use(express.json())
// app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app