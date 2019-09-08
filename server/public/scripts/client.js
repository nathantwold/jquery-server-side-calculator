$(document).ready(function() {
    $('#clear').on('click', clearButton);
    $('.operator').on('click', grabOperator);
    $('#equals').on('click', sendEquation);
    getEquations();
});

let thisOperator = '';

function sendEquation(){
    $('.operator').removeClass('currentOp');
    if($('#firstNumber').val() == '' || $('#secondNumber').val() == ''){
        alert('enter numbers');
        return false;
    }
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
        getEquations();
    }).catch(function(err){
        alert(err, 'sendEquation');
    })
    getAnswer();
    $('#firstNumber').val('');
    thisOperator = '';
    $('#secondNumber').val('');
}

function getEquations(){
    $.ajax({
        type: 'GET',
        url: '/problems'
    }).then(function(response){
        let el = $('#showHistory');
        el.empty();
        for(let i = 0; i < response.length; i++){
            el.append(`
                <h3>${response[i].firstnumber+response[i].operator+response[i].secondnumber+'='+response[i].answer}</h3>
            `)
        }
    }).catch(function(err){
        alert(err, 'getEquations');
    })
}

function getAnswer(){
    $.ajax({
        type: 'GET',
        url: '/problems'
    }).then(function(response){
    let el = $('#showAnswer');
    el.empty();
    el.append(`
        <h3>${(response[response.length-1].answer)}</h3>
        `)
    }).catch(function(err){
        alert(err, 'getEquations');
    })
}

function grabOperator(){
    $('.operator').removeClass('currentOp');
    $(this).addClass('currentOp');
    thisOperator = $(this).attr('id');
    console.log(thisOperator);
}

function clearButton(){
    $('.operator').removeClass('currentOp');
    let el = $('#showAnswer');
    el.empty();
    el.append(`
        <h3>0</h3>
        `)
    thisOperator = '';
    $('#firstNumber').val('');
    $('#secondNumber').val('');
}