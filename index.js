require('dotenv').config();

const express = require('express');
const connect = require('./db');

const app = express();
const port = process.env.PORT || 3030;
const router = require('./network/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

const urlDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@telegrom.ihz0o.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
connect(urlDB);

app.listen(port, () => console.log(`Run server http://localhost:${port}`));
