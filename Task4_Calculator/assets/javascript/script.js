// DISPLAY 1 --> DISPLAYS THE NUMBERS BUTTONS TYPED BY THE USER 
let expression = '';
function display1(value){
    expression = expression+=value;
    document.getElementById('upperdisplay').innerHTML = expression;
    document.getElementById('upperdisplay').setAttribute('value',expression);
    return expression;
}

// DISPLAY 2 --> DISPLAYS THE RESULT OF THE CALCULATION

function display2(result){
    document.getElementById('lowerdisplay').innerHTML = result;

}


// MAIN CALCULATOR FUNCTION 

function maincalculator(){
    var exp = document.getElementById('upperdisplay').getAttribute('value');
    result = eval(exp);
     display2(result);
}

// Clears the displays 

function cleardisplayfn(){
    document.getElementById('upperdisplay').innerHTML ='';
    document.getElementById('lowerdisplay').innerHTML ='0';
    expression='';
}