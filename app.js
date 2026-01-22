const express = require('express');
const app = express();
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const formRoute = require('./routes/messageRouter');
const showMessageRouter = require('./routes/showMessageRouter');

app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', indexRouter);
app.use('/new',formRoute);
app.use('/messages', showMessageRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`running server on port : ${PORT}`)
});

app.use((err,req,res,next)=>{
    console.error(err.message);
    res.status(500).send(err.message);
});

