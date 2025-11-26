let nyitva = false;
function nyitZar(){
    if (nyitva) {
        document.getElementById("nav").style.display ="block" 
        nyitva = true;
    }
    else {
        document.getElementById("nav").style.display ="none"
        nyitva = false;
    }
}