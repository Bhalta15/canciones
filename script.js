// ===============================
// DATOS
// ===============================
const canciones = [
  { titulo: "Reyna de cumbias", artista: "NO RECONOCIDO", categoria: "Cumbias", puesta: false },
  { titulo: "Loco", artista: "Los Cadillacs", categoria: "Rock", puesta: true },
  { titulo: "La muñequita fea", artista: "Los Tepoz", categoria: "Cumbias", puesta: false },
  { titulo: "Ya no te puedo amar", artista: "NO RECONOCIDO", categoria: "Salsas", puesta: true },
  { titulo: "Arréglame el alma", artista: "Panteón Rococó", categoria: "Rock", puesta: false }
  // puedes seguir agregando todas las demás igual
];

// ===============================
// ELEMENTOS
// ===============================
const tbody = document.getElementById("tabla-canciones");
const buscar = document.getElementById("buscar");

// ===============================
// RENDER
// ===============================
function render(data) {
  tbody.innerHTML = "";

  if (data.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align:center;">Sin resultados</td>
      </tr>
    `;
    return;
  }

  data.forEach((c, index) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${c.titulo}</td>
      <td>${c.artista}</td>
      <td>
        <input type="checkbox" ${c.puesta ? "checked" : ""} data-index="${index}">
      </td>
    `;

    tbody.appendChild(fila);
  });

  // eventos de los checkboxes
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", e => {
      const i = e.target.dataset.index;
      canciones[i].puesta = e.target.checked;
    });
  });
}

// ===============================
// BUSCADOR
// ===============================
function aplicarFiltro() {
  const texto = buscar.value.toLowerCase();

  const filtradas = canciones.filter(c =>
    c.titulo.toLowerCase().includes(texto) ||
    c.artista.toLowerCase().includes(texto)
  );

  render(filtradas);
}

buscar.addEventListener("input", aplicarFiltro);

// ===============================
// INICIAL
// ===============================
render(canciones);
