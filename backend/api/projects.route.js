import express from "express";
import Project from "../model/project.js"

const projectRouter = express()

// Read all Projects
projectRouter.get('/', async (req, res) => {
    try {
        const projects = await Project.find()
        res.json(projects)
    } catch (err) {
        res.json({ message: err })
    }
})

// Create a Project
projectRouter.post('/', async (req, res) => {
    const project = new Project({
        src: req.body.src,
        text: req.body.text,
        label: req.body.label,
        path: req.body.path
    })
    try {
        const savedProject = await project.save()
        res.json(savedProject)
    } catch (err) {
        res.json({ message: err })
    }
})

// Specific Project
projectRouter.get('/:projectId', async (req, res) => {
    try {
        const project = await Project.findById(req.params.projectId)
        res.json(project)
    } catch (err) {
        res.json({ message: err })
    }
})

// Delete Project
projectRouter.delete('/:projectId', async (req, res) => {
    try {
        const removedProject = await Project.deleteOne({ _id: req.params.projectId })
        res.json(removedProject)
    } catch (err) {
        res.json({ message: err })
    }
})

// Update a Project
projectRouter.patch('/:projectId', async (req, res) => {
    try {
        const updatedProject = await Project.updateOne({ _id: req.params.projectId }, {
            $set: {
                src: req.body.src,
                text: req.body.text,
                label: req.body.label,
                path: req.body.path
            }
        })
        res.json(updatedProject)
    } catch (err) {
        res.json({ message: err })
    }
})
export default projectRouter
