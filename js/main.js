<<<<<<< HEAD
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
=======
const proyectos = [
  {
    titulo: "Travesias por nariño",
    descripcion: "pagina en angular para fomentar el turismo en nariño.",
    tecnologias: "Angular| JavaScript | MySQL",
    imagen: "img/travesias.jpg",
    github: "https://github.com/BEOWULFK/trabajo-final-de-experiencia-al-usuario"
  },
  {
    titulo: "Pagina web de cafe meseño de nariño ",
    descripcion: "pagina creada con administradores y mercaderes para su pagina de cafe y exportacion de cafe.",
    tecnologias: "html| JavaScript | CSS",
    imagen: "img/cafe.png",
    github: "https://github.com/BEOWULFK/cafe-mese-o"
  },
  {
    titulo: "Proyecto de lenguaje de señas colombiano",
    descripcion: "Proyecto demo realizado para capacitacion de lenguaje de señas colombiano.",
    tecnologias: "python| ",
    imagen: "img/señas.png",
    github: "#"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById("contenedor-proyectos");

  proyectos.forEach(p => {
    contenedor.innerHTML += `
      <div class="col-md-4 mb-4" data-aos="fade-up">
        <div class="card h-100 shadow fade-in">
          <img src="${p.imagen}" class="card-img-top" alt="${p.titulo}">
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

  // Inicializar animaciones AOS si no se hizo antes
  if (window.AOS) AOS.refresh();

  // Inicializar fondo Matrix
  initMatrix();
});

/* ---------------------- Matrix background ---------------------- */
function initMatrix() {
  const canvas = document.getElementById('matrix');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const columns = Math.floor(width / 14) + 1;
  const drops = Array(columns).fill(0);

  const chars = 'ﾊﾐﾋｰｰｳｼﾅﾘﾞﾒﾝﾂﾖﾛﾑｦｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝABCD1234567890@#$%';

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const newCols = Math.floor(width / 14) + 1;
    drops.length = newCols;
    for (let i = 0; i < drops.length; i++) if (!drops[i]) drops[i] = Math.random() * height;
  }

  window.addEventListener('resize', resize);

  function draw() {
    // semitransparent background for trail effect
    ctx.fillStyle = 'rgba(1, 6, 15, 0.15)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#00f7ff';
    ctx.font = '14px "Share Tech Mono", monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      const x = i * 14;
      const y = drops[i] * 14;
      // brillo en la cabeza
      ctx.fillStyle = 'rgba(56,189,248,0.95)';
      ctx.fillText(text, x, y);
      drops[i] = (drops[i] * 14 > height && Math.random() > 0.975) ? 0 : drops[i] + 0.6;
    }
    requestAnimationFrame(draw);
  }

  // Start
  draw();
}
>>>>>>> 8a6421e (Enhance portfolio: Matrix background, fonts, styles, about section, CV link)
