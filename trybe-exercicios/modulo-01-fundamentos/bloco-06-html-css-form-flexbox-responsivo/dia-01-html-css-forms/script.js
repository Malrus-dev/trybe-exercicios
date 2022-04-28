const btnSbmtFtt = document.getElementById("btn-sbmt-ftt");
const btnClearFtt = document.getElementById("btn-clear-ftt");
const formsValues = document.getElementsByClassName("form-value");
window.onload = startPage;
function startPage(){
    btnSbmtFtt.addEventListener("click", postForm);
    btnClearFtt.addEventListener("click", clearForm); 

    var largura = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var altura = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    console.log("altura", altura);
    console.log("largura", largura);

}
function postForm(event){
    event.preventDefault();
    console.log("fim")
}
function clearForm(){
    for(let i = 0; i < formsValues.length; i += 1){
        console.log(formsValues[i]);
    }

}
