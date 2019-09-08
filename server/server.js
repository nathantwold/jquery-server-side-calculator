const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

let problems = [];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log(`Up and running on PORT: ${PORT}`);
});

app.post('/problems', (req, res) => {
    problem = req.body.firstnumber+req.body.operator+req.body.secondnumber;
    if(req.body.operator == '+'){
        answer = ((+req.body.firstnumber)+(+req.body.secondnumber));
    } else if(req.body.operator == '-'){
        answer = ((+req.body.firstnumber)-(+req.body.secondnumber));
    } else if(req.body.operator == '*'){
        answer = ((+req.body.firstnumber)*(+req.body.secondnumber));
    } else if(req.body.operator == '/'){
        answer = ((+req.body.firstnumber)/(+req.body.secondnumber));
    } console.log(answer);   
    req.body.answer = answer;
    problems.push(req.body);
    res.send('YAY');
});

app.get('/problems', (req, res) => {
    res.send(problems);
});



