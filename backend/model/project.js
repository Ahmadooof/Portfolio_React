import mongoose from 'mongoose'


const ProjectSchema = mongoose.Schema({
    src: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
})

export default mongoose.model('Projects', ProjectSchema)