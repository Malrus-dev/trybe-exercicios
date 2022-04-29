function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
window.onload = function () {
    createDays();
    createButton("Feriados");
    addFunction();

}

function createDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const father = document.getElementById("days");
    for(let i = 0; i < dezDaysList.length; i += 1){
        let child = document.createElement("li");
        child.innerText = dezDaysList[i];
        child.classList.add("day")
        if(dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31){
            child.classList.add("holiday")
        }
        if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25){
            child.classList.add("friday")
        }
        father.appendChild(child);
    }
}
function createButton(name){
    let element = document.createElement("button");
    element.id = "btn-holiday";
    element.innerText = name;
    document.getElementsByClassName("buttons-container")[0].appendChild(element);
}
function addFunction(){
    let btn = document.getElementById("btn-holiday");
    btn.addEventListener("click", holidays)
}
function holidays(){
    let hols = document.getElementsByClassName("holiday");
    for (let i = 0; i < hols.length; i += 1){
        if(hols[i].style.backgroundColor === "red"){
            hols[i].style.backgroundColor = "rgb(238,238,238)";
        }else {
            hols[i].style.backgroundColor = "red";
        }
        
    }

}
