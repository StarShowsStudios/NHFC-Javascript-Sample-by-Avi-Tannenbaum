/*

var num1 = 14;

var num2 = 15;

var ticketNumber = 100;
if (num1 < num2) {
ticketNumber +=1;
alert("Calling for ticket number " + ticketNumber);
document.write("Now serving ticket number " + ticketNumber+ ".");
}
else {
document.write("Now serving ticket number " + ticketNumber+ ".");
}

*/

/*
var courseNumber = 1;
if (courseNumber == 1) {
var msg = "Away";
document.write("<h1>Welcome to<br> the Helpdesk ticketing system. <br> </h1> Made in JavaScript by Avi Tannenbaum")
} else if (courseNumber == 2) {
alert("Welcome to the second course of javascript. this was created with the aleart function");
}
else {
document.write("<h1>  I would like you to <br> please continue learning code. <br> its important for life </h1>");
}
*/
// Switch statments examples

var courseNumber = 5;

switch(courseNumber) {
case 1:
document.write("<h1> The first course. </h1>");
break;
case 2:
document.write("<h1> The second course. </h1>");
break;
case 3:
document.write("<h1> The third course. </h1>");
break;
case 4:
document.write("<h1> The fourth course. </h1>");
break;
case 5:
document.write("<h1> The fithft course. - Loops </h1>");
break;
default:
document.writes("<h1>Not in the course system</h1>");
}


//test
var color = "blue";
// Preform action to match the colorit variable.
switch(color) {
case "blue":
document.write("This is the blue color <br>");
break;
case "green":
document.write("This color is green <br>");
break;
case "red":
document.write("This color is red <br>");
break;
case "white":
document.write("This color is white <br>");
break;
case "yellow":
document.write("This color is yellow <br>");
break;
default:
document.write("Not a real color please try again <br>");
}


for (i=1, text=""; i <=13; i++) {
text = "Year";
switch(i){
case 1:
document.write(i + " st <br>" + text + "<br><br>");
break;
case 2: 
document.write(i + " nd <br>" + text + "<br><br>");
break;
case 3:
document.write(i + " rd <br>" + text + "<br><br>");
break;
default:
document.write(i + " th <br>" + text + "<br><br>");
}

}


// for loop practce
// r is the index beocuse i is already in use.

 
for(r = 0; r <= 20; r += 2){
document.write(r);
}

var b=0;
while(b<=20) {

document.write(b + "<br />");
b ++;

}

// do while loop practice

var ticketId=140053
do {
document.write("Ticket number " + ticketId + " is now created. <br />");
ticketId++;
}
while(ticketId <=140069);

// if break practice

for(id=0;id<=18;id++) {
// check if the five number jhas been reached.
	if(id ==5) {
	continue;
	// here is the break line.
	}
	document.write(id + "<br />");
}





