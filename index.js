const express = require('express');

const app = express();
const port = 3000;
const router = require('./network/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

app.listen(port, () => console.log(`Run server http://localhost:${port}`));
