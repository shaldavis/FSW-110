for(var i = 0; i < 5; i++){
    var head = document.createElement("h2");
head.setAttribute("id", "styling");
head.textContent = ("Hello World");
document.body.append(head);
head.style.fontSize = "20px";
head.style.fontWeight = "lighter";
head.style.fontFamily = "san-serif";
head.style.color = "cornflowerblue"; 
head.classList.add("border")
}
