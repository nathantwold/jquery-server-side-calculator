const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

///- functions here -///

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log(`Up and running on PORT: ${PORT}`);
});