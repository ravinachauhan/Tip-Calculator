//declaring all variables
var btnAdd = document.getElementById("add"); 
var btnSubtract = document.getElementById("subtract");
var btnAdd1 = document.getElementById("add1");
var btnSubtract1 = document.getElementById("subtract1");
var billAmt = document.getElementById("bill");
var noOfPerson = document.getElementById("num-person");
var tipPercent = document.getElementById("tip-percent"); 
var tipPerPerson;

//when tip% is increased  by clicking + button
btnAdd.addEventListener("click",(e) => {
    e.preventDefault();
    if (billAmt.value == "0.00") {
    incrementTip();
    }
    else {
        incrementTip();
        calculateTipPerPerson();
        calculateBillPerPerson();
    }
});

//when tip% is decreased  by clicking - button
btnSubtract.addEventListener("click",(e) => {
    e.preventDefault();                              //preventing the page fron refreshing
    if (billAmt.value == "0.00") {
    decrementTip();
    }
    else {
        decrementTip();
        calculateTipPerPerson();
        calculateBillPerPerson();
    }
});

//when number of people is increased  by clicking + button
btnAdd1.addEventListener("click",(e) => {
    e.preventDefault();
    if (billAmt.value == "0.00") {
    incrementPerson();
    }
    else {
        incrementPerson();
        calculateTipPerPerson();
        calculateBillPerPerson();
    }
});

//when number of people is increased  by clicking - button
btnSubtract1.addEventListener("click",(e) => {
    e.preventDefault();
    if (billAmt.value == "0.00") {
    decrementperson();
    }
    else {
        decrementperson();
        calculateTipPerPerson();
        calculateBillPerPerson();
    }
});

//increments tip percentage by 1
function incrementTip() {
    if (tipPercent.value >= 100) {                        //set max value of tip percent to 100
        tipPercent.value = 100;
    }
    else {
    tipPercent.value = parseInt(tipPercent.value)+1;
    }
}

//decrement tip percent value by 1
function decrementTip() {
    if (tipPercent.value <= 0) {                          //set min value of tip percent to 0
        tipPercent.value = 0;
    }
    else {
        tipPercent.value=parseInt(tipPercent.value) - 1;
    }
}

//increments number of people by 1
function incrementPerson() {
    noOfPerson.value = parseInt(noOfPerson.value) + 1;
}

//decrements number of people by 1
function decrementperson() {
    if (noOfPerson.value <= 1) {                           //set min value of person to 1
        noOfPerson.value = 1;
    }
    else {
        noOfPerson.value = parseInt(noOfPerson.value) - 1;
    }
}


//calculates tip per person
function calculateTipPerPerson() {
    if (tipPercent.value < 0) {
        alert("Tip percent value should be between 0 and 100");
        document.getElementById("tip-value").value = "0.00";
        document.getElementById("bill-value").value = "0.00";
    }
    else if (noOfPerson.value <= 0) {
        alert("Number of people should be greater than 0");
        document.getElementById("tip-value").value = "0.00";
        document.getElementById("bill-value").value = "0.00";
    }
    else {
    var percent = tipPercent.value/100;
    tipPerPerson = ( (parseInt(billAmt.value) * percent) / noOfPerson.value);
    document.getElementById("tip-value").value = tipPerPerson.toFixed(2);
    }

}

//calculates total bill per person
function calculateBillPerPerson() {
    var billPerPerson = ( (parseInt(billAmt.value) / parseInt(noOfPerson.value)) + tipPerPerson).toFixed(2);
    document.getElementById("bill-value").value = billPerPerson;

}





