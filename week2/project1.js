//navbar
var navi = document.createElement("nav");
var naviSpace = document.createTextNode(' ');
var naviSpace2 = document.createTextNode(' ');
document.body.appendChild(navi);
console.dir(navi)

var anchorEl1 = document.createElement("a");
anchorEl1.setAttribute("href", "/html");
var txt1 = document.createTextNode("Home");
anchorEl1.appendChild(txt1);
navi.appendChild(anchorEl1)
navi.appendChild(naviSpace)

var anchorEl2 = document.createElement("a");
anchorEl2.setAttribute("href", "/html");
var txt2 = document.createTextNode("About");
anchorEl2.appendChild(txt2);
navi.appendChild(anchorEl2)
navi.appendChild(naviSpace2)

var anchorEl3 = document.createElement("a");
anchorEl3.setAttribute("href", "/html");
var txt3 = document.createTextNode("Contact Us");
anchorEl3.appendChild(txt3);
navi.appendChild(anchorEl3)

//h1 tag
var newHead = document.createElement("h1");
newHead.textContent = "Welcome to My Website"
document.body.append(newHead)
console.dir(newHead)

//p tag
var newP = document.createElement("p")
newP.textContent = "I am so happy You came to visit us"
document.body.append(newP)
console.dir(newP)

//list
var list = document.createElement("Ul")
list.setAttribute("id", "newOl")
document.body.appendChild(list);

var newLine1 = document.createElement("li")
document.getElementById("newOl")
list.append(newLine1)

var newLine2 = document.createElement("li")
document.getElementById("newOl")
list.append(newLine2)

var newLine3 = document.createElement("li")
document.getElementById("newOl")
list.append(newLine3)

newLine1.textContent = "Hello"

newLine2.textContent = "Hola"

newLine3.textContent = "Bonjour"
console.dir(list)

//footer tag
var foot = document.createElement("footer");
foot.textContent = "We hope you enjoy our site"
document.body.append(foot)
console.dir(foot)