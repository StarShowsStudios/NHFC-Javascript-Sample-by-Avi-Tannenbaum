// DOM


function setText() {
var elem = document.getElementById("demo");
var val  = elem.innerHTML;
elem.innerHTML = "Welcome to Avi's test DOM practice";

}

setText();

//Making sure the page is loaded

setTimeout(setText, 500);

var arr = document.getElementsByTagName("p");