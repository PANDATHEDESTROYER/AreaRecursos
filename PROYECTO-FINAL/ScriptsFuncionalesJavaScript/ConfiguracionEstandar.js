// ----------------------------------------------- Seccion De Temas Predefinidos ------------------------------------------------------------
const URLClaveTema = {
  "TemaGeneral":"C:\\PROYECTO3A\\AreaRecursos\\PROYECTO-FINAL\\css\\General.css",
  "TemaClaro": "C:\\PROYECTO3A\\AreaRecursos\\PROYECTO-FINAL\\css\\GeneralClaro.css",
  "TemaOscuro": "C:\\PROYECTO3A\\AreaRecursos\\PROYECTO-FINAL\\css\\GeneralOscuro.css",

};



document.addEventListener("DOMContentLoaded", () => {

const params = new URLSearchParams(window.location.search);
const claveTema = params.get("ClaveTemaURL" || "TemaGeneral");

//AsignacionDeTema
const url = URLClaveTema[claveTema];
const css = document.getElementById("URLIDTEMA");


if (url)css.href = url;
 
  // Actualiza los enlaces del menú
  document.querySelectorAll("a.INICIO").forEach(enlace => {
    const base = enlace.getAttribute("href").split("?")[0]; // limpia cualquier parámetro previo
    enlace.href = `${base}?ClaveTemaURL=${claveTema}`;


    


  });





});


