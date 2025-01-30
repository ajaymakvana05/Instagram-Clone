const express = require('express');
const app = express();
// const data=require('./data')
const cors = require("cors")
const PORT = 3000;
const mongoose = require('mongoose')
const dotenv = require('dotenv')
require('dotenv').config()

app.use(cors());

app.get('/', (req, res) => {
    res.json(data);
})

console.log(process.env.MONGO_URL)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log('Error connecting to database', err);
    }
    )


app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
})