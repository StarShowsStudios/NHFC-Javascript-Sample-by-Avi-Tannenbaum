function title() {
document.write("<h1>This is the function tutorial.</h1>");
}
title();
// call the title function

// Function number 2 - including the alert
function testFunction() {
alert(" This message was called from a function. Yay! ");
}
testFunction();

var num = 1;
while(num <= 3){
document.write("<h1>" + num + "</h1>");
num++;
}


// uncomment this to use ths function
// testFunction();

// end of user defined function tutorial

function test2(name) {
alert("Welcome back " + name + ".");

}

test2("Avi");
test2("Daniel");

function twoParam(firstName, lastName) {
alert("Is your last name " + lastName + "? " + "In that case welcome " + firstName + " " + lastName + "!");

document.write("Welcome back " + firstName + " " + lastName + ". <br>");
}

twoParam("Avi","Tannenbaum");

function whatsup(firstName, lastName, age) {

document.write("Welcome back " + firstName + " " + lastName + "." + " Today you are " + age + ". <br>");
}

whatsup("Avi","Tannenbaum",22);
whatsup("Noam","Atia", 31);


function test3(x, y) {
if (x>y) {
document.write(x + "<br>");
}
else {
document.write(y + "<br>");
}
}
test3(5, 8);

// Multiple parameters practice:

function greeting(name, age) {
document.write(name + " is " + age + " years old. <br>");
}


// deploy greetings.
greeting("Bob",20);

// the return statement practice.

function multipli(num1, num2) {
return num1*num2 + "<br>";
}

var result = multipli(4,6);
document.write(result);

// srecond example practice

function nextTicket(currentTicket, nextTicket) {
for( currentTicket; currentTicket  <= nextTicket; currentTicket++) {

return currentTicket + "<br>";
}
}
document.write(nextTicket(224,226), nextTicket(225,226));

// netx test

function addNumbers(a,b){
var x = a*b;
return x ;
}
document.write( addNumbers(44,6));


