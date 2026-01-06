const canciones = [
  { titulo: "Reyna de cumbias", artista: "NO RECONOCIDO", categoria: "Cumbias", puesta: "Sí" },
  { titulo: "Loco", artista: "Los Cadillacs", categoria: "Rock", puesta: "Sí" },
  { titulo: "La muñequita fea", artista: "Los Tepoz", categoria: "Cumbias", puesta: "Sí" },
  { titulo: "Tu clase de amor", artista: "NO RECONOCIDO", categoria: "Rock", puesta: "Sí" },
  { titulo: "Una pequeña parte de mi", artista: "NO RECONOCIDO", categoria: "Rock", puesta: "Sí" },
  { titulo: "Me dijiste", artista: "NO RECONOCIDO", categoria: "Rock", puesta: "Sí" },
  { titulo: "Te vas a acordar de mi", artista: "NO RECONOCIDO", categoria: "Rock", puesta: "Sí" },
  { titulo: "Joven pretendiente", artista: "NO RECONOCIDO", categoria: "Rock", puesta: "Sí" },
  { titulo: "Cuando abras los ojos", artista: "Briseyda Solís", categoria: "Cumbias", puesta: "Sí" },
  { titulo: "El puente roto", artista: "Priscila", categoria: "Cumbias", puesta: "Sí" },

  { titulo: "Ya no te puedo amar", artista: "NO RECONOCIDO", categoria: "Salsas", puesta: "Sí" },
  { titulo: "Arréglame el alma", artista: "Panteón Rococó", categoria: "Rock", puesta: "Sí" },
  { titulo: "Hot", artista: "NO RECONOCIDO", categoria: "Otros", puesta: "Sí" },
  { titulo: "Prende la fiesta", artista: "NO RECONOCIDO", categoria: "Cumbias", puesta: "Sí" },
  { titulo: "Arpas chicanas", artista: "NO RECONOCIDO", categoria: "Instrumental", puesta: "Sí" },

  { titulo: "Vida ya no es vida", artista: "NO RECONOCIDO", categoria: "Otros", puesta: "Sí" },
  { titulo: "Sin tu amor", artista: "NO RECONOCIDO", categoria: "Otros", puesta: "Sí" },
  { titulo: "Con la misma moneda", artista: "NO RECONOCIDO", categoria: "Salsas", puesta: "Sí" },
  { titulo: "Incompleto amor", artista: "NO RECONOCIDO", categoria: "Salsas", puesta: "Sí" },

  { titulo: "Oye los tambores", artista: "NO RECONOCIDO", categoria: "Cumbias", puesta: "Sí" },
  { titulo: "Cumbia Yemayá", artista: "Son de Puebla", categoria: "Cumbias", puesta: "Sí" },
  { titulo: "Embrujo de cumbia", artista: "Combo Loco", categoria: "Cumbias", puesta: "Sí" },
  { titulo: "Niña enamorada", artista: "Askiz", categoria: "Cumbias", puesta: "Sí" },

  { titulo: "Corazón andino", artista: "NO RECONOCIDO", categoria: "Otros", puesta: "Sí" },
  { titulo: "Sueños del alma", artista: "NO RECONOCIDO", categoria: "Otros", puesta: "Sí" },
  { titulo: "Enamorado de ti", artista: "NO RECONOCIDO", categoria: "Otros", puesta: "Sí" },
  { titulo: "Hoy voy a tomar", artista: "NO RECONOCIDO", categoria: "Otros", puesta: "Sí" },

  { titulo: "Mi canoita", artista: "Policarpo Calles", categoria: "Cumbias", puesta: "Sí" },
  { titulo: "Cumbia campesina", artista: "Policarpo Calles", categoria: "Cumbias", puesta: "Sí" },

  { titulo: "Cómo tu amigo o tu amante", artista: "NO RECONOCIDO", categoria: "Salsas", puesta: "Sí" },

  { titulo: "La chicharrita del café", artista: "Grupo Soire", categoria: "Cumbias", puesta: "Sí" },
  { titulo: "Sampuesana con toquecitos", artista: "Grupo Soire", categoria: "Cumbias", puesta: "Sí" },

  { titulo: "La cumbia de los clarinetes", artista: "Los Juniors", categoria: "Cumbias", puesta: "Sí" },
  { titulo: "Cumbia de los Kiss", artista: "NO RECONOCIDO", categoria: "Cumbias", puesta: "Sí" },

  { titulo: "La nena pistolera", artista: "NO RECONOCIDO", categoria: "Rock", puesta: "Sí" },
  { titulo: "Cumbia de las pelusas", artista: "NO RECONOCIDO", categoria: "Cumbias", puesta: "Sí" },

  { titulo: "Sorbito de champagne", artista: "Peñónera", categoria: "Cumbias", puesta: "Sí" },
  { titulo: "La Reyna de mi vida", artista: "NO RECONOCIDO", categoria: "Otros", puesta: "Sí" },

  { titulo: "El maraquero", artista: "Grupo Kual", categoria: "Cumbias", puesta: "Sí" },

  { titulo: "Lo que te queda", artista: "NO RECONOCIDO", categoria: "Salsas", puesta: "Sí" },
  { titulo: "Tendría que llorar por ti", artista: "NO RECONOCIDO", categoria: "Salsas", puesta: "Sí" },

  { titulo: "Mundo cruel", artista: "Joe Arroyo Jr", categoria: "Salsas", puesta: "Sí" },
  { titulo: "Fabricando fantasías", artista: "NO RECONOCIDO", categoria: "Salsas", puesta: "Sí" },

  { titulo: "Si te entregas a mí", artista: "David Sahan", categoria: "Salsas", puesta: "Sí" },

  { titulo: "El buque inglés", artista: "NO RECONOCIDO", categoria: "Cumbias", puesta: "Sí" },
  { titulo: "Cumbia con papas", artista: "NO RECONOCIDO", categoria: "Cumbias", puesta: "Sí" },

  { titulo: "Flor de capomo", artista: "Cadetes de Linares", categoria: "Norteñas", puesta: "Sí" },
  { titulo: "La banda del carro rojo", artista: "NO RECONOCIDO", categoria: "Norteñas", puesta: "Sí" },

  { titulo: "El polvorón", artista: "Cartel del Mambo", categoria: "Merengue", puesta: "Sí" },
  { titulo: "Shake it up", artista: "NO RECONOCIDO", categoria: "Disco", puesta: "Sí" },

  { titulo: "Me gustas mucho", artista: "Juan Gabriel / Banda El Recodo", categoria: "Banda", puesta: "Sí" },

  { titulo: "Gaita frenética", artista: "NO RECONOCIDO", categoria: "Instrumental", puesta: "Sí" },

  { titulo: "Huapango El Cóndor Pasa", artista: "NO RECONOCIDO", categoria: "Huapango", puesta: "Sí" },
  { titulo: "Huapangos perros", artista: "La Zenda Norteña", categoria: "Huapango", puesta: "Sí" }
];

// ===== NO TOQUES DE AQUÍ PARA ABAJO =====
const tbody = document.getElementById("tabla-canciones");
const buscar = document.getElementById("buscar");
const categoriaSelect = document.getElementById("categoria");

function render(data) {
  tbody.innerHTML = "";
  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;">Sin resultados</td></tr>`;
    return;
  }
  data.forEach(c => {
    tbody.innerHTML += `
      <tr>
        <td>${c.titulo}</td>
        <td>${c.artista}</td>
        <td>${c.categoria}</td>
        <td>${c.puesta}</td>
      </tr>
    `;
  });
}

function aplicarFiltros() {
  const texto = buscar.value.toLowerCase();
  const categoria = categoriaSelect.value;

  const filtradas = canciones.filter(c =>
    (c.titulo.toLowerCase().includes(texto) ||
     c.artista.toLowerCase().includes(texto)) &&
    (categoria === "" || c.categoria === categoria)
  );

  render(filtradas);
}

buscar.addEventListener("input", aplicarFiltros);
categoriaSelect.addEventListener("change", aplicarFiltros);

render(canciones);
