const express = require('express');
const cors = require('cors');
require('dotenv').config();

const router = require('./src/routers/index');
const bodyParser = require('body-parser');

const app = express();


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api', router);


const port = process.env.PORT || 3090;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => console.log(`App is running on port ${port}`));