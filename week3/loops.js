for(var i = 0; i < 10; i++){
    var head = document.createElement("h1");
var txtHead = document.createTextNode("Hello World");
head.appendChild(txtHead);
document.body.append(head)
head.style.color = "firebrick";
head.style.fontFamily = "cambria";
}
console.dir("head")

var names = ["Steve", "Larry", "Joe", "Shirley", "Steph", "Nate", "Rick", "Emily"]

var list = document.createElement("ul");

for(var i = 0; i < names.length; i++){
    var newLi = document.createElement("li");
    newLi.textContent = names[i];
    list.append(newLi)
    document.body.append(list)
}
console.dir("list")