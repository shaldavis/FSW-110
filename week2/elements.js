var newHead = document.createElement("h1")
newHead.textContent = "Welcome to My JS site"
document.body.append(newHead)

var newP = document.createElement("p")
newP.textContent = "All of this was created with JavaScript"
document.body.append(newP)

var list = document.createElement("ol")
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

console.dir(list)

newLine1.textContent = "Hello"

newLine2.textContent = "Hola"

newLine3.textContent = "Bonjour"