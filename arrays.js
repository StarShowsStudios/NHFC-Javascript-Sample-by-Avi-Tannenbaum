// welcome to the array course.
document.write("<h1>Welcome to the javascript array practice <br> by Avi Tannenbaum <br> Writen on June 12th 2016</h1>");


// create test vaiables
var boss = "Daniel K.";
var client = "NHFC";
var webDeveloper = "Avi T.";

// begin array.
var orgenizationNHFC = new Array("Daniel k. ", " <h1> Avi T. 2134863538 </h1>", " NHFC ");


// pull from the array.
var pullBoss = orgenizationNHFC[0];
var pullEmployee = orgenizationNHFC[1];
var pullOrg = orgenizationNHFC[2];


var test = orgenizationNHFC + " is the Array. <br>  " + pullBoss + " is the IT manager, and <br> " + pullEmployee + "Wants to work as a web developer for " + pullOrg + ".";
function printTo(input) {
document.write(input);
}

printTo(test);
// change array variable
orgenizationNHFC[2] = " IT at NHFC ";
var pullOrg = orgenizationNHFC[2];
var test2 = "<br>" + orgenizationNHFC + " " + " is the Array. <br>  " + pullBoss + " is the IT manager, and <br> " + pullEmployee + "Wants to work as a web developer for " + pullOrg + ".";
printTo(test2);


// different array types
// for loop array 

document.write("<h1> Javascript for loop with array practice</h1>");

var testArray = new Array(6);
for(i = 0; i<=14; i++){
testArray[i] = "for " + i + " years of expierience.";
document.write(testArray[i] + " <br> ");
if(i == 9){
document.write("The 9th array! - Stopped by an if statement. <br>");
}
switch(i){
case 1:
document.write("The first test is here <br>");
break;
case 11:
document.write("Easter eggs <br>");
break;
default:
document.write(" ticket Number: 2134863538" + i + " <br> <br>");
}
document.write(testArray.length+ "k $ per month ");
}

// more practice properties and methods
// concat for joining arrays
var testArray1 = ["Avi", " Daniel" , " Matt", " Steve"];
var testArray2 = [" Glen", " Bob", " Nemo", " Dora"];

var joinThem = testArray1.concat(testArray2);


// Associeative Arrays practice by Avi Tannenbaum

// Dictionary keys in swift

var client = []; // New client object type array.
client["name"] = "Gary";
client["lastName"] = "Duckbird";
client["Age"] = 93;
client["id"] = 3339884779;
document.write("<br> Welcome Mr. " + client["lastName"] + " " + client["name"] + ", How are you today?");




document.write(  "<br> <br><h1>More array practice with methods. </h1> <br> Plus " + joinThem + " - This is 2 arrays combined using the'concat' method." + " <br> " + "The first array is: <br> " + testArray1 + " <br> The second array is: <br> " + testArray2 + " <br> and is " + testArray1.length + " entrys long each made with 'array.length method'");



// Practice of Math object.

document.write("<br> While practicing some math functions in javascript: PI is: <br>" + Math.PI);
document.write("<br> While practicing some math functions in javascript: Euler's constant is: <br>" + Math.E);
document.write("<br> While practicing some math functions in javascript: natural log of the value 2 is: <br>" + Math.LN2);
document.write("<br> While practicing some math functions in javascript: natural log of the value 10 is: <br>" + Math.LN10);
document.write("<br> While practicing some math functions in javascript: The base 2 log of Euler constant is: <br>" + Math.LOG2E);
document.write("<br> While practicing some math functions in javascript: The base 10 log of Euler constant is: <br>" + Math.LOG10E);


document.write("<br> Thats all the math for today folks!");


document.write("<br><h1> Some more math practice</h1>");
var number = 336.98;
var number2 = 444;
var num3 = 34;
var num4 = 54;

// math functions:
// Absolute
var result2 = Math.abs(number);
document.write("For the number " + number + ", The absolute number would be:" + result2 + " <br>");


// arccosine arccossinus
var result2 = Math.acos(number);
document.write("For the number " + number + ", The arccosine number would be:" + result2 + " <br>");

// arcssinus
var result2 = Math.asin(number);
document.write("For the number " + number + ", The Arcsine number would be:" + result2 + " <br>");

// atan
var result2 = Math.atan(number);
document.write("For the number " + number + ", The arctangent number would be:" + result2 + " <br>");

// atan2
var result2 = Math.atan2(number,number2);
document.write("For the number " + number + " & " + number2 + ", The arccosine number would be:" + result2 + " <br>");

// ceil Round number upwards
var result2 = Math.ceil(number);
document.write("For the number " + number + ", The rounded upwards to the longest number number would be:" + result2 + " <br>");

// cos
var result2 = Math.cos(number);
document.write("For the number " + number + ", The cssinus number would be:" + result2 + " <br>");

// e square
var result2 = Math.exp(number);
document.write("For the number " + number + ", The e suare number would be:" + result2 + " <br>");

// round the number downwardss
var result2 = Math.floor(number);
document.write("For the number " + number + ", The rounded downwards number would be:" + result2 + " <br>");

// log
var result2 = Math.log(number);
document.write("For the number " + number + ", The natural lagoriythim number would be:" + result2 + " <br>");


// max
var result2 = Math.max(number, number2, num3 ,num4);
document.write("For the number " + number + " ," + number2 + " , " + num3 + " , " + num4 + ", The largest number is number would be:" + result2 + " <br>");

// min
var result2 = Math.min(number, number2, num3 ,num4);
document.write("For the number " + number + " ," + number2 + " , " + num3 + " , " + num4 + ", The lowest number is number would be:" + result2 + " <br>");


// pow
var result2 = Math.pow(number, number2);
document.write("For the number " + number + " ," + number2 + ", The power of both numbers is number would be:" + result2 + " <br>");


// random number generator
var result2 = Math.random();
document.write("Take a randome number"  + result2 + " <br>");


// round
var result2 = Math.round(number);
document.write("For the number " + number + ", The nearest round number would be:" + result2 + " <br>");

// sine
var result2 = Math.sin(number);
document.write("For the number " + number + ", The sine number would be:" + result2 + " <br>");

// sqrt square root
var result2 = Math.sqrt(number);
document.write("For the number " + number + ", The square root number would be:" + result2 + " <br>");

// tan
var result2 = Math.tan(number);
document.write("For the number " + number + ", The tangant number would be:" + result2 + " <br>");

// begin user interaction for this one i will begin with a calculator

document.write("<h1> <br> User calculator Javascript practice </h1>");

var num = prompt("Hey there, Please enter a number to the box below to continue. \n Hint: if you enter 'clock' your are in for a surprize ", "");
var answer = Math.sqrt(num);
var printThis = "The square root of " + num + " would be " + answer;
document.write("The number you entered is " + num + "<br>");
document.write(printThis);
alert(printThis);


// date practicce

document.write("<h1> <br> Date practice </h1>");
/*
function myAlert() {
document.write("Test alert");
}
setInterval(myAlert, 30000); */


var d = new Date();
// d is our new date hero

document.write(d + "<br>");

var m = new Date(865000000);
document.write(m + "<br>");

var s = new Date("June 12, 2015 10:55:00");
document.write(s + "<br>");


var ym = new Date(88,5,6,11,42,0,0);
document.write(ym + "<br>");


// todays date

var todayDate = new Date();
var hour = todayDate.getHours();
document.write(hour + "<br>");


//clock
if(num == "clock") {

function clock() {
var d = new Date();
var hours = d.getHours();
var mins = d.getMinutes();
var secs = d.getSeconds();
document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(clock, 1000);

}

