const carruseles = [
  {
    estyloarea:"ContenedorDeslizable1",
    id: "carouselComputacion",
    titulo: "Computación",
    items: [
      { imagen: "../Imagenes/SeccionCSS.png", enlace: "../Computacion/HTML5CSS3/HTML5CSS3-N001.html", alt: "Área 1" },
      { imagen: "../Imagenes/SeccionHTML.png", enlace: "../Computacion/HTML5CSS3/HTML5CSS3-N001.html", alt: "Área 2" },
      { imagen: "../Imagenes/SeccionMySQL.png", enlace: "../Computacion/HTML5CSS3/HTML5CSS3-N001.html", alt: "Área 3" },
      { imagen: "../Imagenes/SeccionCSHARP.png", enlace: "../Computacion/HTML5CSS3/HTML5CSS3-N001.html", alt: "Área 4" },
      { imagen: "../Imagenes/SeccionJAVA.png", enlace: "../Computacion/HTML5CSS3/HTML5CSS3-N001.html", alt: "Área 5" },
      { imagen: "../Imagenes/SeccionOFFICE.png", enlace: "../Computacion/HTML5CSS3/HTML5CSS3-N001.html", alt: "Área 6" }
    ]
  },
  {
    id: "carouselFisicaMatematica",
    titulo: "Física y Matemáticas",
    items: [
      { imagen: "Imagenes/Fisica1.png", enlace: "Fisica/Area1.html", alt: "Física" },
      { imagen: "Imagenes/Matematica1.png", enlace: "Matematica/Area1.html", alt: "Matemáticas" }
    ]
  },
  {
    id: "carouselRobotica",
    titulo: "Robótica",
    items: [
      { imagen: "Imagenes/Robotica1.png", enlace: "Robotica/Area1.html", alt: "Robótica 1" },
     
    ]
  }
];

const contenedor = document.getElementById("galeria");

carruseles.forEach(carrusel => {
  let indicadores = "";
  let items = "";

  carrusel.items.forEach((item, index) => {
    indicadores += `
      <button type="button" data-bs-target="#${carrusel.id}" data-bs-slide-to="${index}" ${index === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${index + 1}"></button>
    `;
    items += `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <a href="${item.enlace}">
          <img src="${item.imagen}" class="ImagenDeslizable2" alt="${item.alt}">
        </a>
      </div>
    `;
  });

  const bloque = `
    <div class="ContenedorDeslizable3">
      <h4 class="text-center mb-3">${carrusel.titulo}</h4>
      <div id="${carrusel.id}" class="carousel slide">
        <div class="carousel-indicators">${indicadores}</div>
        <div class="carousel-inner">${items}</div>
        <button class="carousel-control-prev" type="button" data-bs-target="#${carrusel.id}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#${carrusel.id}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  `;

  contenedor.innerHTML += bloque;
});