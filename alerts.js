alert("Welcome dear \nHow are you doing today?");


var username = prompt(" Please enter your username or email ");
alert(username);

var result = confirm("Do you really want to leave this page?");
if (result == true) {
alert(" Ok then, \n Thank you for visiting \n the Javascript practice website \n by Avi Tannebaum 2016");
}
else {
alert(" Oh cool, \n I see you chose to stay! yay! ");
}

function test(number){
while(number < 5) {
number++;
}
return number;
}
alert(test(2));

function multNmbrs(a, b) {
var c = a*b;
return c;
}
var show = multNmbrs(2,6);
alert(show);

function test3(a,b) {
if (a > b) {
return a*b;
} else {
return b/ a;
}
}
alert(test3(5, 15));