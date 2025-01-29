const express = require('express');
const app = express();
const data=require('./data')
const cors=require("cors")
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.json(data);
})



app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
})