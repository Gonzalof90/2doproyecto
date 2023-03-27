let $createForm = document.querySelector("#createForm");
let $codigoPelicula = document.querySelector("#codigoPelicula");
let $nombrePelicula = document.querySelector("#nombrePelicula");
let $generoPelicula = document.querySelector("#generoPelicula");
let $descripcionPelicula = document.querySelector("#descripcionPelicula");
let $isCheked = document.querySelector("#isCheked");
let $contenedorPelicula = document.querySelector("#contenedorPelicula");
let $agregarPelicula = document.querySelector("#agregarPelicula");
let $opcionesDePeliculas = document.querySelector(".opcionesDePeliculas");

let peliculas = [];
const peliculasEnLocalStorage = localStorage.getItem("peliculas");
const peliculasConvertidasJS = JSON.parse(peliculasEnLocalStorage);

if (peliculasConvertidasJS !== null) {
  peliculas = peliculasConvertidasJS;
}

$createForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const peliculaNueva = {
    codigo: generateId(),
    nombre: $nombrePelicula.value,
    genero: $generoPelicula.value,
    descripcion: $descripcionPelicula.value,
    checked: $isCheked.checked,
  };
  peliculas.push(peliculaNueva);
  console.log(peliculaNueva);
  guardarPeliculas(peliculas);
  pintarPeliculas();
  console.log(peliculas);

  $createForm.reset();
});

const guardarPeliculas = (peliculasGuardada) => {
  const peliculasEnJSON = JSON.stringify(peliculasGuardada);
  const peliculasEnLocalStorage = localStorage.setItem(
    "peliculas",
    peliculasEnJSON
  );
};

const pintarPeliculas = () => {
  $contenedorPelicula.innerHTML = "";
  peliculas.forEach((pelicula) => {
    const estructuraPelicula = `<tr ><th scope="row">${pelicula.codigo}</th>
      <td>${pelicula.nombre}</td>
      <td>${pelicula.genero}</td>
      <td>${pelicula.descripcion}</td>
      <td>${pelicula.checked ? "✔️" : "✖️"}</td>
      <td class="opcionesDePeliculas">
      <button onclick="borrarPelicula(${pelicula.codigo})" class="btn btn-light">
      <img src="../assets/icons/papelera-de-reciclaje.png" alt="papelera-de-reciclaje" style="width:2vw" >
      </button>
      <img src="../assets/icons/editar.png" alt="papelera-de-reciclaje" style="width:2vw">
      <img src="../assets/icons/mensaje-destacado.png" alt="papelera-de-reciclaje" style="width:2vw"></td></tr>`;
    $contenedorPelicula.innerHTML += estructuraPelicula;
  });
};
pintarPeliculas();

const generateId = () => Math.floor(Math.random() * 9999999);

function borrarPelicula(id){
  peliculas = peliculas.filter(pelicula=> pelicula.codigo !== parseInt(id))
  guardarPeliculas(peliculas)
  pintarPeliculas()
}