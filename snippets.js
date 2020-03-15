//Open devtools and go to sources->snippets. Add a new snippet and paste this file.

var inGlobalContext = true;

function printLessThanFive(){
    var isInLessThanFiveFunction = true;
    console.log('the number is less than 5');  
}

function printIsFive(){
    var isInGreaterThanFiveFunction = true;
    console.log('the number is five');
}

function printGreaterThanFive(){
    var isInGreaterThanFiveFunction = true;
    console.log('the number is greater than five');
}


function runLoop(){
    var inRunLoop = true;
    for (var i=0; i<10; i++){
        if (i<5){
            printLessThanFive();
        }
        else if (i===5){
            printIsFive();
        }
        else{
            printGreaterThanFive();
        }
    }
}

runLoop();