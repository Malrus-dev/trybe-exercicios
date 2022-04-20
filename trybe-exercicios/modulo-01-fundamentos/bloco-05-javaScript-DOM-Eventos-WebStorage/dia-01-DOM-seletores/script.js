changeTextTP();
function changeTextTP() {
    let paragraphs = document.getElementsByTagName("p");
    let cont = 0;
    let array = ["Daqui a dois anos me vejo já bem estabelecido como um profissional de tecnologia. ", "Como eu estou aberto a estudar em qualquer área, eu posso estar em qualquer lugar,","e espero já ter concluído com alguns de meus projetos pessoais."];
    for(let num of paragraphs) {            
        num.innerText = array[cont];
        cont += 1;
    }
}
changeColorSquare1();
function changeColorSquare1() {
    let SideSquares = document.getElementsByClassName("main-content")[0];
    SideSquares.style.backgroundColor = 'rgb(76,164,109)';
}
changeColorSection();
function changeColorSection() {
  let sectionBox = document.getElementsByClassName("center-content")[0];
  sectionBox.style.backgroundColor = 'white';
}
changeTextTitle();
function changeTextTitle() {
  let textTitle = document.getElementsByClassName("title")[0];
  textTitle.innerText = "Exercício 5.1 - JavaScript";
}
changeTextCase();
function changeTextCase() {
  let paragraphs = document.getElementsByTagName("p");
  let array = [];
  for (let num of paragraphs){
    num.style.textTransform = "uppercase";
  }
  
}
printInConsole();
function printInConsole() { 
    let paragraphs = document.getElementsByTagName("p");
    for (let num of paragraphs){
        console.log(num.innerHTML);
    }
    
}
/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/