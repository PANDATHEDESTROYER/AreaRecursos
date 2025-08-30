const presentacionesDeEcuacionesDiferenciales = {
  "SolucionDeEcuacionesMetodoDeEcuacionesHomogeneas": "https://docs.google.com/document/d/1Z7oiQTJDByw8-kn9lUmnRqwn7snwoPXF/edit?usp=sharing&ouid=111721747043223939650&rtpof=true&sd=true",
  "SolucionDeEcuacionesMetodoDeVariblesSeparables": "https://docs.google.com/document/d/1wnNNBzn-8_0EZeA7koQtZN2LbyJXIGz2/edit?usp=sharing&ouid=111721747043223939650&rtpof=true&sd=true",
  "SolucionDeEcuacionesMetodoDeLaHomogeneaDeCoeficientesConstantes": "https://docs.google.com/document/d/1rkqz5JDaU-nczmqrvCl8AS1FPOMgM9iu/edit?usp=sharing&ouid=111721747043223939650&rtpof=true&sd=true"
};



document.addEventListener("DOMContentLoaded", () => {

const params = new URLSearchParams(window.location.search);
const clave = params.get("NombreLink");
const url = presentacionesDeEcuacionesDiferenciales[clave];
const iframe = document.querySelector("iframe");

if (url) {
  document.querySelector("iframe").src = url;



} else {
  document.getElementById("iframe").src = ""; // o muestra un mensaje de error
}
});