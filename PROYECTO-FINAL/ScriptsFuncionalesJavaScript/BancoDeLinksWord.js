const presentacionesDeEcuacionesDiferenciales = {
  "SolucionDeEcuacionesMetodoDeEcuacionesHomogeneas": "https://docs.google.com/document/d/1Z7oiQTJDByw8-kn9lUmnRqwn7snwoPXF/edit?usp=sharing&ouid=111721747043223939650&rtpof=true&sd=true",
  "SolucionDeEcuacionesMetodoDeVariblesSeparables": "https://docs.google.com/document/d/1SRMFv_blOSyE0PqNpu9DRtMUFVfqsRvm/edit?usp=sharing&ouid=111721747043223939650&rtpof=true&sd=true",
  "SolucionDeEcuacionesMetodoDeLaHomogeneaDeCoeficientesConstantes": "https://docs.google.com/document/d/1rkqz5JDaU-nczmqrvCl8AS1FPOMgM9iu/edit?usp=sharing&ouid=111721747043223939650&rtpof=true&sd=true"
};



document.addEventListener("DOMContentLoaded", () => {

const params = new URLSearchParams(window.location.search);
const clave = params.get("NombreLink");
const url = presentacionesDeEcuacionesDiferenciales[clave];
const iframe = document.getElementById("visorPresentacionWord");

if (url) {
  document.getElementById("visorPresentacionWord").src = url;



} else {
  document.getElementById("visorPresentacionWord").src = "C:\\PROYECTO3A\\AreaRecursos\\PROYECTO-FINAL\\Windossim.html"; // o muestra un mensaje de error
}
});