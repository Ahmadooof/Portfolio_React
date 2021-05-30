import express from "express";

const router = express()

router.get('/', (req, res) => {
    res.send('we are in projects')
})

router.post('/', (req, res) => {
    console.log(req.body);
})

export { router };
