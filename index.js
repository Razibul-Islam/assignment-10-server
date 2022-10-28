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
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})