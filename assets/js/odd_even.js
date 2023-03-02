//Assign variable to user input
var number = window.prompt("input any numerical value between 1 and 1000");

//create function to check value
var inputCheck = function() {
    number = window.prompt("input any numerical value between 1 and 1000");
}


while (number < 1 || number > 1000) {
    inputCheck();
}

if(number % 2 == 0) {
    console.log("This is an even number");
} else {
    console.log("This is an odd number");
}