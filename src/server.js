import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const api = express.Router();

app.use(bodyParser.json);
app.use('/api',api);

app.listen(9999);