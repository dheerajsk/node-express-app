
const express = require('express');
// express exports a function, hence use it as funciton
const app = express();
const bodyParser = require('body-parser');

// ()=>{} function will be executed for every incoming reques.
// app.use((req, res, next)=>{
//     console.log("middleware");
//     // Call next middleware
//     next();
// });

//it will do body parsing and then call next middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input name="title" type="text" /> <button type="submit">Add Product</button></form>')
});

app.use('/product', (req, res, next) => {
    // will be undefined without parser.
    console.log(req.body);
    console.log("middleware 2");
    res.send({ name: "he" })
});

app.use('/', (req, res, next) => {
    console.log("middleware 2");
    res.send({ name: "he" })
});


app.listen(3300);

// or
// const server = http.createServer(app);

// server.listen(3300);