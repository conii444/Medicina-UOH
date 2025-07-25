const malla = [
  {
    semestre: "1° Semestre",
    ramos: [
      { nombre: "Química y Bioquímica", detalle: "6 SCT" },
      { nombre: "Anatomía 1", detalle: "5 SCT" },
      { nombre: "Introducción a la profesión Médica 1", detalle: "5 SCT" },
      { nombre: "Histología y Embriología", detalle: "5 SCT" },
      { nombre: "Física Médica", detalle: "4 SCT" },
      { nombre: "Inglés 1 / CFG", detalle: "3 SCT – Inglés / CFG" },
      { nombre: "Matemática y Bioestadística", detalle: "6 SCT" },
      { nombre: "Alfabetización Académica", detalle: "3 SCT" }
    ]
  },
  {
    semestre: "2° Semestre",
    ramos: [
      { nombre: "Anatomía 2", detalle: "8 SCT" },
      { nombre: "Introducción a la profesión Médica 2", detalle: "5 SCT" },
      { nombre: "Fisiología 1", detalle: "7 SCT" },
      { nombre: "Investigación 1", detalle: "2 SCT" },
      { nombre: "Psicología General y Evolutiva", detalle: "3 SCT" },
      { nombre: "Sociedad y Salud 1", detalle: "3 SCT" },
      { nombre: "Inglés 2 / CFG", detalle: "3 SCT – Inglés / CFG" }
    ]
  },
  {
    semestre: "3° Semestre",
    ramos: [
      { nombre: "Fisiología 2", detalle: "8 SCT" },
      { nombre: "Investigación 2", detalle: "2 SCT" },
      { nombre: "Sociedad y Salud 2", detalle: "3 SCT" },
      { nombre: "Farmacología 1", detalle: "4 SCT" },
      { nombre: "Agentes Vivos de Enfermedades", detalle: "9 SCT" },
      { nombre: "Inglés 3 / CFG", detalle: "3 SCT – Inglés / CFG" }
    ]
  },
  {
    semestre: "4° Semestre",
    ramos: [
      { nombre: "Fisiopatología 1", detalle: "5 SCT" },
      { nombre: "Farmacología 2", detalle: "3 SCT" },
      { nombre: "Anatomía Patológica", detalle: "4 SCT" },
      { nombre: "Geriatría", detalle: "4 SCT" },
      { nombre: "Sociedad y Salud 3", detalle: "3 SCT" },
      { nombre: "Inglés 4", detalle: "3 SCT – Inglés / CFG" }
    ]
  },
  {
    semestre: "5° Semestre",
    ramos: [
      { nombre: "Semiología 1", detalle: "8 SCT" },
      { nombre: "Fisiopatología 2 e Integración Básico-Clínico", detalle: "9 SCT" },
      { nombre: "Bioética", detalle: "2 SCT" },
      { nombre: "Diagnóstico de Salud Poblacional", detalle: "3 SCT" },
      { nombre: "Método Diagnóstico", detalle: "2 SCT" },
      { nombre: "Oftalmología", detalle: "3 SCT" },
      { nombre: "Inglés 5", detalle: "3 SCT – Inglés / CFG" }
    ]
  },
  {
    semestre: "6° Semestre",
    ramos: [
      { nombre: "Semiología 2", detalle: "13 SCT" },
      { nombre: "Dermatología", detalle: "3 SCT" },
      { nombre: "Neurología", detalle: "4 SCT" },
      { nombre: "Equipo de Salud", detalle: "2 SCT" },
      { nombre: "Gestión en Salud", detalle: "4 SCT" }
    ]
  },
  {
    semestre: "7° Semestre",
    ramos: [
      { nombre: "Medicina Interna 1", detalle: "9 SCT" },
      { nombre: "Psiquiatría del Adulto e Infanto Juvenil", detalle: "6 SCT" },
      { nombre: "Otorrinolaringología", detalle: "3 SCT" },
      { nombre: "Traumatología y Fisiatría", detalle: "5 SCT" },
      { nombre: "Medicina Legal", detalle: "3 SCT" }
    ]
  },
  {
    semestre: "8° Semestre",
    ramos: [
      { nombre: "Medicina Interna 2", detalle: "15 SCT" },
      { nombre: "Medicina General y Familiar 1", detalle: "5 SCT" },
      { nombre: "Salud Pública", detalle: "4 SCT" },
      { nombre: "Investigación Clínica", detalle: "2 SCT" }
    ]
  },
  {
    semestre: "9° Semestre",
    ramos: [
      { nombre: "Cirugía", detalle: "9 SCT" },
      { nombre: "Ginecología y Obstetricia", detalle: "10 SCT" },
      { nombre: "Medicina General y Familiar 2", detalle: "10 SCT" },
      { nombre: "Urología", detalle: "3 SCT" },
      { nombre: "Terapias Complementarias", detalle: "2 SCT" }
    ]
  },
  {
    semestre: "10° Semestre",
    ramos: [
      { nombre: "Pediatría y Cirugía Infantil", detalle: "12 SCT" },
      { nombre: "Medicina de Urgencia", detalle: "4 SCT" },
      { nombre: "Integración Global", detalle: "5 SCT" },
      { nombre: "Inglés 6 / CFG", detalle: "3 SCT – Inglés / CFG" }
    ]
  },
  {
    semestre: "Internado (11º – 14º)",
    ramos: [
      { nombre: "Rotaciones en internado", detalle: "Prácticas clínicas supervisadas por área disciplinar en centros de salud, hospitales y atención primaria" }
    ]
  }
];

const container = document.getElementById("malla-container");

malla.forEach(sem => {
  const div = document.createElement("div");
  div.className = "semestre";
  div.innerHTML = `<h2>${sem.semestre}</h2>`;

  sem.ramos.forEach(ramo => {
    const ramoDiv = document.createElement("div");
    ramoDiv.className = "ramo";
    ramoDiv.innerHTML = `${ramo.nombre}<div class="detalle">${ramo.detalle}</div>`;

    ramoDiv.onclick = () => {
      const detalle = ramoDiv.querySelector(".detalle");
      detalle.style.display = detalle.style.display === "block" ? "none" : "block";
    };

    div.appendChild(ramoDiv);
  });

  container.appendChild(div);
});
