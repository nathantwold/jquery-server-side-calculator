$(document).ready(function() {
    $('#clear').on('click', clearButton);
    $('.operator').on('click', grabOperator);
    $('#equals').on('click', sendEquation);
    getEquations();
});

let thisOperator = '';

function sendEquation(){
    let equation = {
        firstnumber: $('#firstNumber').val(),
        operator: thisOperator,
        secondnumber: $('#secondNumber').val()
    } 
    $.ajax({
        type: 'POST',
        url: '/problems',
        data: equation
    }).then(function(response){
        console.log('back from /problems with: ', response);
        getEquations();
    }).catch(function(err){
        alert(err, 'sendEquation');
    })
}

function getEquations(){
    $.ajax({
        type: 'GET',
        url: '/problems'
    }).then(function(response){
        console.log('back from server with: ', response);
        let el = $('#showHistory');
        let el2 = $('#showAnswer');
        el.empty();
        el2.empty();
        el2.append(`
            <h3>${(response[response.length-1].answer)}</h3>
             `)
        for(let i = 0; i < response.length; i++){
            el.append(`
                <h3>${response[i].firstnumber+response[i].operator+response[i].secondnumber+'='+response[i].answer}</h3>
            `)
        }
    }).catch(function(err){
        alert(err, 'getEquations');
    })
}

function grabOperator(){
    thisOperator = $(this).attr('id');
    console.log(thisOperator);
}

function clearButton(){
    answer = 0;
    thisOperator = 0;
    $('#firstNumber').val('');
    $('#secondNumber').val('');
}