$(document).ready(function() {
    $('#clear').on('click', clearButton);
    $('.operator').on('click', grabOperator);
    $('#equals').on('click', equateButton);
});

let problem = '';
let problems = [];
let equations = [];
let thisOperator = '';
let answer = 0;

function equateButton(){
    let equation = {
        firstnumber: $('#firstNumber').val(),
        operator: thisOperator,
        secondnumber: $('#secondNumber').val()
    } 
    problem = equation.firstnumber+equation.operator+equation.secondnumber;
    problems.push(problem);
    if(equation.operator == '+'){
        answer = ((+equation.firstnumber)+(+equation.secondnumber));
    } else if(equation.operator == '-'){
        answer = ((+equation.firstnumber)-(+equation.secondnumber));
    } else if(equation.operator == '*'){
        answer = ((+equation.firstnumber)*(+equation.secondnumber));
    } else if(equation.operator == '/'){
        answer = ((+equation.firstnumber)/(+equation.secondnumber));
    }
    console.log(answer);
    equations.push(equation);
    let el = $('#showAnswer');
    el.empty();
    el.append(`
        <h3>${answer}</h3>
    `)
    let el2 = $('#showHistory');
    el2.empty();
    for(let i = 0; i < problems.length; i++){
        el2.append(`
            <h3>${problems[i]}</h3>
        `)
    }
}

function grabOperator(){
    thisOperator = $(this).attr('id');
    console.log(thisOperator);
}

function clearButton(){
    answer = 0
    let el = $('#showAnswer');
    el.empty();
    el.append(`
        <h3>${answer}</h3>
    `);
    $('#firstNumber').val('');
    $('#secondNumber').val('');
}