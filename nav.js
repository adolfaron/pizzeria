let nyitva = false;
const nav = document.getElementById("nav");

function nyitZar() {
    if (!nyitva) {
        nav.style.maxHeight = "200px";
        nav.style.display ="flex"
        nyitva = true;
    } else {
        nav.style.maxHeight = "0px";
        nav.style.display ="flex"
        nyitva = false;
    }
}

window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
        nav.style.transition = "none"
        nav.style.maxHeight = nyitva ? "200px" : "0px";
        setTimeout(() => {
            nav.style.transition = "max-height .8s ease-in-out"
          }, 800);
    } else {
        // mobil: az állapottól függ
        //nav.style.maxHeight = nyitva ? "200px" : "0px";
        nav.style.transition = "none"
        nav.style.maxHeight = "200px";
        setTimeout(() => {
            nav.style.transition = "max-height .8s ease-in-out"
          }, 800);
    }
});
