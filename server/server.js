const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

let problems = [];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Up and running on PORT: ${PORT}`);
});

app.delete('/problems', (req, res) => {
    problems = [];
    res.send('history deleted');
});

app.get('/problems', (req, res) => {
    res.send(problems);
});

app.post('/problems', (req, res) => {
    if (req.body.operator == '+') {
        answer = ((+req.body.firstnumber) + (+req.body.secondnumber));
    } else if (req.body.operator == '-') {
        answer = ((+req.body.firstnumber) - (+req.body.secondnumber));
    } else if (req.body.operator == '*') {
        answer = ((+req.body.firstnumber) * (+req.body.secondnumber));
    } else if (req.body.operator == '/') {
        answer = ((+req.body.firstnumber) / (+req.body.secondnumber));
    } console.log(answer);
    req.body.answer = answer;
    problems.push(req.body);
    res.send('answer sent');
});
