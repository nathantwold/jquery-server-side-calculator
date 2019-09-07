console.log('JQ');

$(document).ready(function() {
    // $('#clear').on('click', clearButton);
    $('.operator').on('click', grabOperator);
    $('#equals').on('click', equateButton);
    // 
});

let thisOperator = '';
let answer = 0;

function equateButton(){
    console.log('in equate');
    let equation = {
        firstnumber: $('#firstNumber').val(),
        operator: thisOperator,
        secondnumber: $('#secondNumber').val()
    }
    console.log(equation);
    let objectString = (equation.firstnumber+equation.operator+equation.secondnumber);
    let answer = parseInt(objectString);
    console.log(answer);
    
}

function grabOperator(){
    console.log('in grab');
    thisOperator = $(this).attr('id');
    console.log(thisOperator);
}

function clearButton(){

}