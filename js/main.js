const proyectos = [
  {
    titulo: "Facturero Digital",
    descripcion: "Sistema con interfaz gráfica para gestión de facturas.",
    tecnologias: "Python | Tkinter | MySQL",
    imagen: "img/proyectos/placeholder.png",
    github: "https://github.com/BEOWULFK"
  },
  {
    titulo: "Robot SCARA",
    descripcion: "Control de robot SCARA con cinemática inversa.",
    tecnologias: "Python | Arduino",
    imagen: "img/proyectos/placeholder.png",
    github: "#"
  },
  {
    titulo: "Proyecto en desarrollo",
    descripcion: "Próximo proyecto...",
    tecnologias: "—",
    imagen: "img/proyectos/placeholder.png",
    github: "#"
  }
];

const contenedor = document.getElementById("contenedor-proyectos");

proyectos.forEach(p => {
  contenedor.innerHTML += `
    <div class="col-md-4 mb-4" data-aos="fade-up">
      <div class="card h-100 shadow">
        <img src="${p.imagen}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${p.titulo}</h5>
          <p class="card-text">${p.descripcion}</p>
          <p class="text-muted">${p.tecnologias}</p>
          <a href="${p.github}" target="_blank" class="btn btn-primary btn-sm">
            Ver código
          </a>
        </div>
      </div>
    </div>
  `;
});
