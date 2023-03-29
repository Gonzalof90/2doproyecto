let $createForm = document.querySelector("#createForm");
let $codigoPelicula = document.querySelector("#codigoPelicula");
let $nombrePelicula = document.querySelector("#nombrePelicula");
let $generoPelicula = document.querySelector("#generoPelicula");
let $descripcionPelicula = document.querySelector("#descripcionPelicula");
let $isCheked = document.querySelector("#isCheked");
let $contenedorPelicula = document.querySelector("#contenedorPelicula");
let $agregarPelicula = document.querySelector("#agregarPelicula");
let $opcionesDePeliculas = document.querySelector(".opcionesDePeliculas");
let $addMovie = document.querySelector("#addMovie");
let $tipo1 = document.querySelector("#tipo1");
let $tipo2 = document.querySelector("#tipo2");

let $urlImageBigSize = document.querySelector("#urlImageBigSize");
let $urlImageSmallSize = document.querySelector("#urlImageSmallSize");
let $urlTrailer = document.querySelector("#urlTrailer");
let $duracionHoras = document.querySelector("#duracionHoras");
let $duracionMinutos = document.querySelector("#duracionMinutos");
let $anioEstreno = document.querySelector("#anioEstreno");

let isCreate = true;
let peliculas = [];
const peliculasEnLocalStorage = localStorage.getItem("peliculas");
const peliculasConvertidasJS = JSON.parse(peliculasEnLocalStorage);

if (peliculasConvertidasJS !== null) {
  peliculas = peliculasConvertidasJS;
}

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
      duracionMinutos: $duracionMinutos.value,
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
          duracionMinutos: $duracionMinutos.value,
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
    const estructuraPelicula = `<tr ><th scope="row" class="text-center">${
      pelicula.codigo
    }</th>
    <td class="text-center">${pelicula.tipo}</td>
    <td class="text-center">${pelicula.nombre}</td>
      <td class="text-center">${pelicula.genero}</td>
      <td class="text-center">${pelicula.descripcion}</td>
      <td class="text-center">${pelicula.checked ? "✔️" : "✖️"}</td>
      <td class="opcionesDePeliculas text-center">
      <button onclick="borrarPelicula(${
        pelicula.codigo
      })" class="btn btn-light">
      <img src="../assets/icons/papelera-de-reciclaje.png" alt="papelera-de-reciclaje" style="width:2vw" >
      </button>
      <button onclick="editarPelicula(${
        pelicula.codigo
      })" class="btn btn-light"    data-bs-toggle="modal"
      data-bs-target="#staticBackdrop">
      <img src="../assets/icons/editar.png" alt="icono_de_editar" style="width:2vw">
      </button>
      
      <img src="../assets/icons/mensaje-destacado.png" alt="papelera-de-reciclaje" style="width:2vw"></td></tr>`;
    $contenedorPelicula.innerHTML += estructuraPelicula;
  });
};
pintarPeliculas(peliculas);

const generateId = () => Math.floor(Math.random() * 9999999);

function borrarPelicula(id) {
  peliculas = peliculas.filter((pelicula) => pelicula.codigo !== parseInt(id));
  guardarPeliculas(peliculas);
  pintarPeliculas(peliculas);
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
  $duracionMinutos.value = peliculaFound.duracionMinutos;
  $anioEstreno.value = peliculaFound.anioEstreno;
  console.log(id);
  console.log(peliculaFound);
}
