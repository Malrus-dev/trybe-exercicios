const btnSbmtFtt = document.getElementById("btn-sbmt-ftt");
const btnClearFtt = document.getElementById("btn-clear-ftt");
const formsValues = document.getElementsByClassName("take-value");
window.onload = startPage;
function startPage(){
    btnSbmtFtt.addEventListener("click", postForm);
    btnClearFtt.addEventListener("click", clearForm); 
    const validate = new window.JustValidate('#form');
    document.getElementById('form-date').DatePickerX.init();
}
function postForm(event){
    event.preventDefault();
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