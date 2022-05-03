const ids = ["bkgc", "colorT", "sizeT", "lineH", "fontType"]
window.onload = function() {
    if(localStorage.length > 0){
        document.getElementsByTagName("main")[0].style.backgroundColor = localStorage.getItem("bkgc");
        document.getElementsByTagName("main")[0].style.color = localStorage.getItem("colorT");
        document.getElementsByTagName("main")[0].style.fontSize = localStorage.getItem("sizeT");
        document.getElementsByTagName("main")[0].style.lineHeight = localStorage.getItem("lineH");
        document.getElementsByTagName("main")[0].style.fontFamily = localStorage.getItem("fontType");
    }    
    let buttons = document.getElementsByClassName("btn-c");
    for (let i = 0; i < buttons.length; i += 1){
        if (i === 0){
            buttons[i].addEventListener("click", bkgc);
        }else if (i === 1){
            buttons[i].addEventListener("click", colorT);
        }else if (i === 2){
            buttons[i].addEventListener("click", sizeT);
        }else if (i === 3){
            buttons[i].addEventListener("click", lineH);
        }else if (i === 4){
            buttons[i].addEventListener("click", fontType);
        }
    }
}
function bkgc(){
    document.getElementsByTagName("main")[0].style.backgroundColor = document.getElementById(ids[0]).value;
    localStorage.setItem("bkgc", document.getElementById(ids[0]).value);
}
function colorT(){
    document.getElementsByTagName("main")[0].style.color = document.getElementById(ids[1]).value;
    localStorage.setItem("colorT", document.getElementById(ids[1]).value);
}
function sizeT(){
    document.getElementsByTagName("main")[0].style.fontSize = document.getElementById(ids[2]).value;
    localStorage.setItem("sizeT", document.getElementById(ids[2]).value);
}
function lineH(){
    document.getElementsByTagName("main")[0].style.lineHeight = document.getElementById(ids[3]).value;
    localStorage.setItem("lineH", document.getElementById(ids[3]).value);
}
function fontType(){
    let numb = document.getElementById(ids[1]).value;
    if (numb === "1"){
        numb = "Verdana, Geneva, Tahoma, sans-serif";
    }else if (numb === "2"){
        numb = "'Courier New', Courier, monospace";
    }else if (numb === "3"){
        numb = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    }else if (numb === "4"){
        numb = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    }
    document.getElementsByTagName("main")[0].style.fontFamily = numb;
    localStorage.setItem("fontType", document.getElementById(ids[4]).value);
}