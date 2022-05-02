const btnSbmtFtt = document.getElementById("btn-sbmt-ftt");
const btnClearFtt = document.getElementById("btn-clear-ftt");
const formsValues = document.getElementsByClassName("form-value");
window.onload = startPage;
function startPage(){
    btnSbmtFtt.addEventListener("click", postForm);
    btnClearFtt.addEventListener("click", clearForm); 
}
function postForm(event){
    event.preventDefault();
    for(let i = 0; i < formsValues.length; i += 1){
        if(i === 9){
            if(formsValues[i].checked === false){
                alert("É necessário autorizar a utilização da sua imagem na divulgação de concursos futuros!")
            }else{
                alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.")
            }
        }
    }

}
function clearForm(){
    for(let i = 0; i < formsValues.length; i += 1){
        if (i > 1 && i < 6 || i > 7){
            if (formsValues[i].checked){
                formsValues[i].checked = false;
            }            
        }else{
            formsValues[i].value = null;
        }        
    }
}