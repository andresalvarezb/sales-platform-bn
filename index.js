const express = require('express');
const db = require('./db');
const router = express.Router();

db(process.env.DATABASE);
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);


app.listen(port, () => console.log(`Run server http://localhost:${port}`));
