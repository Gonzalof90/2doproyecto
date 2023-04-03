// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "90db857e17msh0068c62e39d858cp1a1feajsn362ef8bb4d17",
//     "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://api.themoviedb.org/3/movie/550?api_key=05dca1457ad69952257055689327523d"
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

let $createForm = document.querySelector("#createForm");
let $codigoPelicula = document.querySelector("#codigoPelicula");
let $nombrePelicula = document.querySelector("#nombrePelicula");
let $generoPelicula = document.querySelector("#generoPelicula");
let $descripcionPelicula = document.querySelector("#descripcionPelicula");
let $isCheked = document.querySelector("#isCheked");
let $contenedorPelicula = document.querySelector("#contenedorPelicula");
let $contenedorPeliculaDestacada = document.querySelector(
  "#contenedorPeliculaDestacada"
);
let $agregarPelicula = document.querySelector("#agregarPelicula");
let $opcionesDePeliculas = document.querySelector(".opcionesDePeliculas");
let $addMovie = document.querySelector("#addMovie");
let $tipo1 = document.querySelector("#tipo1");
let $tipo2 = document.querySelector("#tipo2");
let $tituloDestacada = document.querySelector("#tituloDestacada");
let $tablaDestacada = document.querySelector("#tablaDestacada");

let $urlImageBigSize = document.querySelector("#urlImageBigSize");
let $urlImageSmallSize = document.querySelector("#urlImageSmallSize");
let $urlTrailer = document.querySelector("#urlTrailer");
let $duracionHoras = document.querySelector("#duracionHoras");
let $duracionMinutos = document.querySelector("#duracionMinutos");
let $anioEstreno = document.querySelector("#anioEstreno");

let isCreate = true;
let peliculas = [];
let destacada = [];
const peliculasEnLocalStorage = localStorage.getItem("peliculas");
const peliculasConvertidasJS = JSON.parse(peliculasEnLocalStorage);

if (peliculasConvertidasJS !== null) {
  peliculas = peliculasConvertidasJS;
}

let destacadaEnLocalStorage = localStorage.getItem("peliDestacada");
let destacadaConvertidasJS = JSON.parse(destacadaEnLocalStorage);

if (destacadaConvertidasJS !== null) {
  destacada = destacadaConvertidasJS;
}
console.log(typeof({}))
$addMovie.addEventListener("click", function () {
  $agregarPelicula.innerHTML = "Agregar Contenido";
  $agregarPelicula.style.backgroundColor = "#0275d8";
});

$tipo1.addEventListener("change", function () {
  if (isCreate) {
    if ($tipo1.checked) {
      $agregarPelicula.innerHTML = "Agregar Pelìcula";
    }
  }
});
$tipo2.addEventListener("change", function () {
  if (isCreate) {
    if ($tipo2.checked) {
      $agregarPelicula.innerHTML = "Agregar Serie";
    }
  }
});

function tipos() {
  let radios = document.getElementsByName("tipo");
  let selected = Array.from(radios).find((radio) => radio.checked);
  return selected.value;
}

$createForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (isCreate) {
    const peliculaNueva = {
      codigo: generateId(),
      tipo: tipos(),
      nombre: $nombrePelicula.value,
      genero: $generoPelicula.value,
      descripcion: $descripcionPelicula.value,
      checked: $isCheked.checked,
      urlImageBigSize: $urlImageBigSize.value,
      urlImageSmallSize: $urlImageSmallSize.value,
      urlTrailer: $urlTrailer.value,
      duracionHoras: $duracionHoras.value,
      anioEstreno: $anioEstreno.value,
    };
    peliculas.push(peliculaNueva);
    guardarPeliculas(peliculas);
    pintarPeliculas(peliculas);
    $createForm.reset();
  } else {
    peliculas = peliculas.map((pelis) => {
      if (pelis.codigo === parseInt($codigoPelicula.value)) {
        return {
          codigo: pelis.codigo,
          tipo: tipos(),
          nombre: $nombrePelicula.value,
          genero: $generoPelicula.value,
          descripcion: $descripcionPelicula.value,
          checked: $isCheked.checked,
          urlImageBigSize: $urlImageBigSize.value,
          urlImageSmallSize: $urlImageSmallSize.value,
          urlTrailer: $urlTrailer.value,
          duracionHoras: $duracionHoras.value,
          anioEstreno: $anioEstreno.value,
        };
      }
      return pelis;
    });
    guardarPeliculas(peliculas);
    pintarPeliculas(peliculas);
    $createForm.reset();
    isCreate = true;
  }
});

const guardarPeliculas = (peliculasGuardada) => {
  const peliculasEnJSON = JSON.stringify(peliculasGuardada);
  const peliculasEnLocalStorage = localStorage.setItem(
    "peliculas",
    peliculasEnJSON
  );
};

const pintarPeliculas = (arr) => {
  $contenedorPelicula.innerHTML = "";
  arr.forEach((pelicula) => {
    const estructuraPelicula = `<tr><th scope="row" class="text-center">${
      pelicula.codigo
    }</th>
    <td class="text-center">${pelicula.tipo}</td>
    <td class="text-center">${pelicula.nombre}</td>
      <td class="text-center contentResp">${pelicula.genero}</td>
      <td class="text-center contentResp">${pelicula.descripcion}</td>
      <td class="text-center contentResp">${pelicula.checked ? "✔️" : "✖️"}</td>
      <td class="opcionesDePeliculas text-center">
      <button onclick="borrarPelicula(${
        pelicula.codigo
      })" class="btn btn-light btnTable">
      <img src="../assets/icons/papelera-de-reciclaje.png" alt="papelera-de-reciclaje" style="width:2vw" >
      </button>
      <button onclick="editarPelicula(${
        pelicula.codigo
      })" class="btn btn-light btnTable"    data-bs-toggle="modal"
      data-bs-target="#staticBackdrop">
      <img src="../assets/icons/editar.png" alt="icono_de_editar" style="width:2vw">
      </button>

      <button onclick="destacarPelicula(${
        pelicula.codigo
      })"  class="btn btn-light btnTable">
      <img src="../assets/icons/mensaje-destacado.png" alt="papelera-de-reciclaje" style="width:2vw"></td></tr>
      </button>
      
      `;

    $contenedorPelicula.innerHTML += estructuraPelicula;
  });
};
pintarPeliculas(peliculas);

const generateId = () => Math.floor(Math.random() * 9999999);

function borrarPelicula(id) {
  peliculas = peliculas.filter((pelicula) => pelicula.codigo !== parseInt(id))
  guardarPeliculas(peliculas);
  pintarPeliculas(peliculas);
}
function borrarPeliculaDestacada(id) {
  destacada = []
  console.log(destacada)
  guardarDestacada(destacada);
  pintarPeliculaDestacada(destacada);
  window.location.reload()
}

function editarPelicula(id) {
  isCreate = false;
  $agregarPelicula.innerHTML = "Editar Contenido";
  $agregarPelicula.style.backgroundColor = "green";

  const peliculaFound = peliculas.find((peli) => peli.codigo === parseInt(id));
  $codigoPelicula.value = peliculaFound.codigo;
  $nombrePelicula.value = peliculaFound.nombre;
  $generoPelicula.value = peliculaFound.genero;
  $descripcionPelicula.value = peliculaFound.descripcion;
  $isCheked.checked = peliculaFound.checked;
  $urlImageBigSize.value = peliculaFound.urlImageBigSize;
  $urlImageSmallSize.value = peliculaFound.urlImageSmallSize;
  $urlTrailer.value = peliculaFound.urlTrailer;
  $duracionHoras.value = peliculaFound.duracionHoras;
  $anioEstreno.value = peliculaFound.anioEstreno;
  console.log(id);
}

function destacarPelicula(id) {
  peliculas = destacada.concat(peliculas);
  destacada = peliculas.filter((pelicula) => pelicula.codigo === id);
  console.log(destacada);
  guardarDestacada(destacada);
  peliculas = peliculas.filter((pelicula) => pelicula.codigo !== id);
  guardarPeliculas(peliculas);
  pintarPeliculas(peliculas);
  pintarPeliculaDestacada(destacada);
  window.location.reload()
}

const pintarPeliculaDestacada = (arr) => {
  $contenedorPeliculaDestacada.innerHTML = "";
  arr.forEach((pelicula) => {
    const estructuraPelicula = `<tr><th scope="row" class="text-center">${
      pelicula.codigo
    }</th>
    <td class="text-center">${pelicula.tipo}</td>
    <td class="text-center">${pelicula.nombre}</td>
      <td class="text-center contentResp">${pelicula.genero}</td>
      <td class="text-center contentResp">${pelicula.descripcion}</td>
      <td class="text-center contentResp">${pelicula.checked ? "✔️" : "✖️"}</td>
      <td class="opcionesDePeliculas text-center">
      <button onclick="borrarPeliculaDestacada(${
        pelicula.codigo
      })" class="btn btn-light btnTable">
      <img src="../assets/icons/papelera-de-reciclaje.png" alt="papelera-de-reciclaje" style="width:2vw" >
      </button>
      <button onclick="editarPelicula(${
        pelicula.codigo
      })" class="btn btn-light btnTable"    data-bs-toggle="modal"
      data-bs-target="#staticBackdrop">
      <img src="../assets/icons/editar.png" alt="icono_de_editar" style="width:2vw">
      </button>

      <button onclick="quitarDestacadoPelicula(${
        pelicula.codigo
      })"  class="btn btn-light btnTable">
      <img src="../assets/icons/destacado.png" alt="papelera-de-reciclaje" style="width:2vw"></td></tr>
      </button>
      
      `;

    $contenedorPeliculaDestacada.innerHTML += estructuraPelicula;
  });
};
pintarPeliculaDestacada(destacada)

function guardarDestacada(arr) {
  let destacadaEnJSON = JSON.stringify(arr);
  destacadaEnLocalStorage = localStorage.setItem(
    "peliDestacada",
    destacadaEnJSON
  );
}
console.log(typeof(0))
if(Object.entries(destacada).length===0){
  $tituloDestacada.style.visibility = "hidden"
  $tablaDestacada.style.visibility = "hidden"
}else{
  $tituloDestacada.style.visibility = "visible"
  $tablaDestacada.style.visibility = "visible"
}

function quitarDestacadoPelicula(id){
  peliculas = destacada.concat(peliculas);
  borrarPeliculaDestacada(id)
  guardarPeliculas(peliculas);
  pintarPeliculas(peliculas);
  window.location.reload()
}