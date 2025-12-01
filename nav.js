let nyitva = false;
const nav = document.getElementById("nav");
function nyitZar(){
    if (!nyitva) {
        nav.style.display ="block" 
        nyitva = true;
    }
    else {
        nav.style.display ="none"
        nyitva = false;
    }
}
window.addEventListener("resize", function() {
    
    if (window.innerWidth > 720) {
        nav.style.display = "";
    } else {
        if (nyitva) {
        nav.style.display ="block" 
        
        }
        else {
            nav.style.display ="none"
            
        }
    }
});