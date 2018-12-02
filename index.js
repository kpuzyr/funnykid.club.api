const express = require('express');
const bunyan = require('bunyan');
const bodyParser = require('body-parser');
require('./config/config');
const RequestController = require('./controllers/RequestController');

const log = bunyan.createLogger({ name: 'funnykid' });
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('App is working');
});

loadControllers();

app.listen(3000, () => {
    log.info('App is running on 3000 port');
});

function loadControllers() {
    RequestController(app);
}
