import express from 'express';
import dotenv from 'dotenv';
import Connection from './src/database/db.js';
import baseRouter from './baseRouter.js';
import cors from 'cors';
import email from './src/services/email.js';
const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: "*"
}

app.use(cors(corsOptions)); 
app.use(express.json())         //required to accept req.body as json
app.use(baseRouter);
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});  

// email();

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);
 
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server is runing on port: ${PORT}`)
})