const express = require('express');
const app = express();

//importing routers
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');

const cors = require( 'cors');

app.use(cors({
    origin: ['http://localhost:3000']
}));

//convert(parse) json data
app.use(express.json());

//adding routers
app.use('/user', userRouter);
app.use('/product', productRouter);

const port = 5000;

app.get('/', (req, res) => {      
    res.send('Working Perfectly');    //get is used for searching somethig because data is not hidden
                                      //post is used for login or signup because data is hidden
});

app.get('/add', (req, res) => {
    res.send('Response from Add');
});

app.get('/getall', (req, res) => {
    res.send('Response from Getall route');
});

app.listen( port, () => { console.log('server started!!'); } );
