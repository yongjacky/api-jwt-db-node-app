import express from 'express';
import bodyParser from 'body-parser';
import sessionsController from './controllers/sessions'
import customersController from './controllers/customers';
require('dotenv').config();

const app = express();
const homeRoute = express.Router();
const api = express.Router();

app.use(bodyParser.json());
app.use('/api',api);

app.use('/',homeRoute);
homeRoute.get('/', (req,res)=> {
    res.status(200).json({});
});

sessionsController(api);
customersController(api);

app.listen(process.env.APP_LISTEN_PORT, () => {
    console.log(`API JWT DB NODE APP Started and Listened at port ${process.env.APP_LISTEN_PORT}`);
});