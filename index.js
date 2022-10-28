const express = require("express")
const app = express()
const cors = require("cors")
const port = 5000

app.use(cors());

const course = require('./data/course.json');

app.get('/', (req, res) => {
    res.send('Hello This is a server');
})

app.get('/course', (req, res) => {
    res.send(course)
})

app.get("/course/:id", (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find((c) => c._id === id);
    res.send(selectedCourse);
})

