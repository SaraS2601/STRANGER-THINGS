const fila = document.querySelector(".carrusel");
const capítulos = document.querySelector("fotos-galería-img");

const flechaIzq = document.getElementById("flecha-izq");
const flechaDer = document.getElementById("flecha-der");

/*------*/

flechaDer.addEventListener("click", () =>{
    fila.scrollLeft += fila.offsetWidth;
});

flechaIzq.addEventListener("click", () =>{
    fila.scrollLeft -= fila.offsetWidth;
});

/*-----*/

var btnAbrirPopup2 = document.getElementById("btn-abrir-popup2"),
    overlay2 = document.getElementById("overlay2"),
    popup2 = document.getElementById("popup2"),
    btnCerrarPopup1 = document.getElementById("btn-cerrar-popup1");

btnAbrirPopup2.addEventListener("click", function() {
    overlay2.classList.add("active");
})

btnCerrarPopup1.addEventListener("click", function() {
    overlay2.classList.remove("active");
})

/*-----*/

var btnAbrirPopup3 = document.getElementById("btn-abrir-popup3"),
    overlay3 = document.getElementById("overlay3"),
    popup3 = document.getElementById("popup3"),
    btnCerrarPopup2 = document.getElementById("btn-cerrar-popup2");

btnAbrirPopup3.addEventListener("click", function() {
    overlay3.classList.add("active");
})

btnCerrarPopup2.addEventListener("click", function() {
    overlay3.classList.remove("active");
})

/*-----*/

var btnAbrirPopup4 = document.getElementById("btn-abrir-popup4"),
    overlay4 = document.getElementById("overlay4"),
    popup4 = document.getElementById("popup4"),
    btnCerrarPopup3 = document.getElementById("btn-cerrar-popup3");

btnAbrirPopup4.addEventListener("click", function() {
    overlay4.classList.add("active");
})

btnCerrarPopup3.addEventListener("click", function() {
    overlay4.classList.remove("active");
})

/*-----*/

var btnAbrirPopup5 = document.getElementById("btn-abrir-popup5"),
    overlay5 = document.getElementById("overlay5"),
    popup5 = document.getElementById("popup5"),
    btnCerrarPopup4 = document.getElementById("btn-cerrar-popup4");

btnAbrirPopup5.addEventListener("click", function() {
    overlay5.classList.add("active");
})

btnCerrarPopup4.addEventListener("click", function() {
    overlay5.classList.remove("active");
})

/*-----*/

var btnAbrirPopup6 = document.getElementById("btn-abrir-popup6"),
    overlay6 = document.getElementById("overlay6"),
    popup6 = document.getElementById("popup6"),
    btnCerrarPopup5 = document.getElementById("btn-cerrar-popup5");

btnAbrirPopup6.addEventListener("click", function() {
    overlay6.classList.add("active");
})

btnCerrarPopup5.addEventListener("click", function() {
    overlay6.classList.remove("active");
})

/*-----*/

var btnAbrirPopup7 = document.getElementById("btn-abrir-popup7"),
    overlay7 = document.getElementById("overlay7"),
    popup7 = document.getElementById("popup7"),
    btnCerrarPopup6 = document.getElementById("btn-cerrar-popup6");

btnAbrirPopup7.addEventListener("click", function() {
    overlay7.classList.add("active");
})

btnCerrarPopup6.addEventListener("click", function() {
    overlay7.classList.remove("active");
})