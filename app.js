require('dotenv').config();

const express = require('express');
const app = express();
const path = require('node:path');
const messageRouter = require('./routes/messageRouter');

app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', messageRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`running server on port : ${PORT}`)
});

app.use((err,req,res,next)=>{
    console.error(err.message);
    res.status(500).send(err.message);
});

