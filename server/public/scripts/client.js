console.log('JQ');

$(document).ready(function() {
    // $('#clear').on('click', clearButton);
    $('.operator').on('click', grabOperator);
    $('#equals').on('click', equateButton);
    showAnswer();
});

let thisOperator = '';
let answer = 0;

function equateButton(){
    let equation = {
        firstnumber: $('#firstNumber').val(),
        operator: thisOperator,
        secondnumber: $('#secondNumber').val()
    } 
    if(equation.operator == '+'){
        let objectString = ((+equation.firstnumber)+(+equation.secondnumber));
        answer = objectString;
    } else if(equation.operator == '-'){
        let objectString = ((+equation.firstnumber)-(+equation.secondnumber));
        answer = objectString;
    } else if(equation.operator == '*'){
        let objectString = ((+equation.firstnumber)*(+equation.secondnumber));
        answer = objectString;
    } else if(equation.operator == '/'){
        let objectString = ((+equation.firstnumber)/(+equation.secondnumber));
        answer = objectString;
    }
    console.log(answer);
    showAnswer();
}

function grabOperator(){
    thisOperator = $(this).attr('id');
    console.log(thisOperator);
}

function showAnswer(){
    let el = $('#showAnswer');
    el.empty();
    el.append(`
        <h2>${answer}</h2>
    `);
}

function clearButton(){

}