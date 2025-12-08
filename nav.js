let nyitva = false;
const nav = document.getElementById("nav");

function nyitZar() {
    if (!nyitva) {
        nav.style.maxHeight = "150px";
        nav.style.display ="block"
        nyitva = true;
    } else {
        nav.style.maxHeight = "0px";
        nav.style.display ="block"
        nyitva = false;
    }
}

window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
        // desktop: mindig látszik, nincs animáció
        nav.style.maxHeight = nyitva ? "150px" : "0px";
        //nav.style.maxHeight = "150px";
    } else {
        // mobil: az állapottól függ
        //nav.style.maxHeight = nyitva ? "150px" : "0px";
        nav.style.maxHeight = "150px";
    }
});
