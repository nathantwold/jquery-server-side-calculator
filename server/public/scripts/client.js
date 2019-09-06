console.log('JQ');

$(document).ready(function() {
    $('#equals').on('click', equateButton);
    $('#clear').on('click', clearButton);
});

function grabOperator(){
    let operator = $(this).attr('id');
    return operator;
}

function equateButton(){
    let equation = {
        firstnumber: $('#firstNumber').val(),
        secondnumber: $('#secondNumber').val(),
        operator: grabOperator()
    }
    console.log(equation);
}

function clearButton(){

}