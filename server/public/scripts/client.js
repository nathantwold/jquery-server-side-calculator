console.log('JQ');

$(document).ready(function() {
    // $('#clear').on('click', clearButton);
    $('.operator').on('click', grabOperator);
    $('#equals').on('click', equateButton);
    // 
});

let thisOperator = '';

function equateButton(){
    console.log('in equate');
    let equation = {
        firstnumber: $('#firstNumber').val(),
        grabOperator: thisOperator,
        secondnumber: $('#secondNumber').val()
    }
    console.log(equation);
    
}

function grabOperator(){
    console.log('in grab');
    thisOperator = $(this).attr('id');
    console.log(thisOperator);
}

function clearButton(){

}