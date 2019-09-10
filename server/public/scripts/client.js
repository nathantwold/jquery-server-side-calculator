$(document).ready(function () {
    $('#clear').on('click', clearButton);
    $('.operator').on('click', grabOperator);
    $('#equals').on('click', sendEquation);
    $('#deleteButton').on('click', deleteHistory);
    getEquations();
});

let thisOperator = '';

// clears the answer display on DOM and removes operator that's currently selected
function clearButton() {
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

// deletes all calculation history from the server
function deleteHistory() {
    if (confirm('Are you sure you want to delete calculation history?')) {
        $.ajax({
            type: 'DELETE',
            url: '/problems'
        }).then(function (response) {
            console.log(response);
            getEquations();
        }).catch(function (err) {
            alert(err, 'deleteAll');
        })
    }
}

// updates DOM with answer to the last equation sent to server
function getAnswer() {
    $.ajax({
        type: 'GET',
        url: '/problems'
    }).then(function (response) {
        let el = $('#showAnswer');
        el.empty();
        el.append(`
        <h3>${(response[response.length - 1].answer)}</h3>
        `)
    }).catch(function (err) {
        alert(err, 'getAnswer');
    })
}

// updates calculation history on DOM
function getEquations() {
    $.ajax({
        type: 'GET',
        url: '/problems'
    }).then(function (response) {
        let el2 = $('#showHistory');
        el2.empty();
        for (let i = 0; i < response.length; i++) {
            el2.append(`
                <h3>${response[i].firstnumber + response[i].operator + response[i].secondnumber + '=' + response[i].answer}</h3>
            `)
        }
    }).catch(function (err) {
        alert(err, 'getEquations');
    })
}

// saves the last selected operator to send to server with equation object for calculation
function grabOperator() {
    $('.operator').removeClass('currentOp');
    $(this).addClass('currentOp');
    thisOperator = $(this).attr('id');
    console.log(thisOperator);
}

// send equation to server as an object for server to calculate
function sendEquation() {
    $('.operator').removeClass('currentOp');
    if ($('#firstNumber').val() == '' || thisOperator == '' || $('#secondNumber').val() == '') {
        alert('enter two numbers and an operator and I will do the maths');
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
    }).then(function (response) {
        getEquations();
        getAnswer();
        $('#firstNumber').val('');
        thisOperator = '';
        $('#secondNumber').val('');
    }).catch(function (err) {
        alert(err, 'sendEquation');
    })
}