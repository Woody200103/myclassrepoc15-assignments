//declare a var for my name
let myName = "David";

//find the element in document by its id name
let displayElement = document.getElementById("nameDisplay");

// change the content of the element to the value of myname
displayElement.innerHTML = myName;


displayElement.style.color = "purple";
displayElement.style.textShadow = "2px, 2px, 5px, black";
displayElement.style.transition = "all 2s";
setTimeout(function(){
    displayElement.style.color = "purple";
}, 2000)