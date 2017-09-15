import express from 'express';
import bodyParser from 'body-parser';
import template from './template';
//import sessionsController from './controllers/sessions'

const app = express();
const api = express.Router();

function renderClient(req, res) {
    res.send(template);
}

app.use(renderClient);
app.use(bodyParser.json());
app.use('/api',api);

api.get('/health', (req,res)=> {
    res.json({status: 'OK'})
});

//sessionsController(api);

app.listen(1234);

console.log('started!');