var ticket = {
number: 5001, handler: "Avi Tannenbaum", department: "IT",
description: "This is the sample description"};

// write the message
document.write("Handling ticket number " + ticket['number'] + " <br> is currently in the hands of <br>" + ticket.handler + " from the " + ticket.department + " department.  <br> The description of the case: " + ticket.description + "<br>");

// length dispay practice

var description = {
descriptionView: "Once upon a time there was a very talented young programer called Avi Tannenbaum and all across the forest he was seeken by hightech companeys. little did he know he was yet to be hired in a magical job in nyc. This is a short description of the case limited to 300 yo character javascript writing bla bla bla..."};

if(description.descriptionView.length <= 313) {
document.write(description.descriptionView + " <br> " + description.descriptionView.length + "/600 Characters long.");
} else {
alert("Too many characters in the description");


}


// in swift for ios the "this is like " self" .
function ticketNew(number, handler, department, description) {
this.number = number;
this.handler = handler;
this.department = department;
this.description = description;
}

var ticket1 = new ticketNew(320522279, "Avi Tannenbaum", "IT", "Server crashed and is being repaired by the IT Department.");


var ticket2 = new ticketNew(320522280, "Daniel K.", "IT", "Printer crashed and is being repaired by the IT Department.");
document.write(ticket1.number + ticket1.handler);

// New object

// customer object
/*
function customer(firstName, lastName, phoneNumber, email, id) {
this.firstName = firstName;
this.lastName = lastName;
this.phoneNumber = phoneNumber;
this.email = email;
this.id = id;
}

// enter new customers.

var bob = new customer("bob", "jordan", 0587007247, "Starshows@gmail.com", 320522279);
var james = new customer("james", "smith", 2134863538, "avikaylat@gmail.com", 320522280);
document.write("<br> " + bob.firstName + " " + bob.lastName + "'s Phone number is " + bob.phoneNumber);

*/
// Javascript Methods ( functions + Objects )

function customer(firstName, lastName, phoneNumber, email, id, age) {
this.firstName = firstName;
this.lastName = lastName;
this.phoneNumber = phoneNumber;
this.email = email;
this.id = id;
this.age = age;
this.yearOfBirth = bornYear;
this.changePhone = function(phoneNumber) {
this.phoneNumber = "a new phone number that goes " + phoneNumber;
}
this.changeEmail = function(email) {
this.email = email;
}
}
function bornYear() {
return 2016 - this.age;
}

var bob = new customer("Bob", "Jordan", 0587007247, "Starshows@gmail.com", 320522279, 33);
var james = new customer("james", "smith", 2134863538, "avikaylat@gmail.com", 320522280, 45);
document.write("<br> " + bob.firstName + " " + bob.lastName + "'s Phone number is " + bob.phoneNumber);
bob.changePhone(1221222323);
document.write("<br> " + bob.firstName + " " + bob.lastName + "'s Phone number is " + bob.phoneNumber + " the email is: " + bob.email + " and was born on " + bob.yearOfBirth() + " (Pulled from a function and method) ");
 
