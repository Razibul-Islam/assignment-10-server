const express = require("express")
const app = express()

const port = 5000



const course = require('./data/course.json');

app.get('/', (req, res) => {
    res.send('Hello This is a server');
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})