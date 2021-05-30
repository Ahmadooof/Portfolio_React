import express from "express";
import Project from "../model/project.js"

const projectRouter = express()

projectRouter.get('/', (req, res) => {
    res.send('we are in projects')
})

projectRouter.post('/createProject', (req, res) => {
    const project = new Project({
        src: req.body.src,
        text: req.body.text,
        label: req.body.label,
        path: req.body.path
    })
    project.save().then(data => {
        // res.json(data)
    }).catch(err => {
        console.log(err);
    })
})

export default projectRouter
