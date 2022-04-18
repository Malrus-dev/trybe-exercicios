let element = document.getElementById("elementoOndeVoceEsta");
//1-
console.log("1-", element);
//2-
element.parentElement.style.color = "black";
//3-
let newText = document.createTextNode("Adicionando um texto qualquer para finalizar");
element.firstElementChild.appendChild(newText);
//4-
let father = document.getElementById("pai");
console.log("4-", father.firstElementChild);
//5-
console.log("5-", element.previousElementSibling);
//6-
console.log("6-", element.nextSibling);
//7-
console.log("7-", element.nextElementSibling);
//8-
console.log("8-", father.children[2]);
//9-
addChildTo(father);
function addChildTo(nodeFather){
    let newChild = document.createElement("p");
    newChild.innerText = "Coloquei esse texto para o filho ficar visível";
    nodeFather.appendChild(newChild);
}
//10-
addChildTo(element);
//11-
let newChild = document.createElement("p");
newChild.innerText = "Coloquei esse texto para o filho ficar visível";
element.firstElementChild.appendChild(newChild);
//12-
console.log(newChild.parentElement.parentElement.nextElementSibling);
//13-


for (let child of father.children) {
    console.log(child.ATTRIBUTE_NODE);
}