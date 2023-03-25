let $formCreate = document.querySelector("#createForm");
let $codigoPelicula = document.querySelector("#codigoPelicula");
let $nombrePelicula = document.querySelector("#nombrePelicula");
let $categoriaPelicula = document.querySelector("#categoriaPelicula");
let $descripcionPelicula = document.querySelector("#descripcionPelicula");
let $isCheked = document.querySelector("#isCheked");
let $contenedorPelicula = document.querySelector("#contenedorPelicula")
let $agregarPelicula = document.querySelector("#agregarPelicula")
let $opcionesDePeliculas = document.querySelector(".opcionesDePeliculas")



var peliculas = []
const peliculasEnLocalStorage = localStorage.getItem("peliculas")
const peliculasConvertidasJS = JSON.parse(peliculasEnLocalStorage) 

if(peliculasConvertidasJS !== null){ 
  
    peliculas = peliculasConvertidasJS
  }

$agregarPelicula.addEventListener("click",function (event){
    event.preventDefault()
    const peliculaNueva = {
        codigo: $codigoPelicula.value,
      nombre: $nombrePelicula.value,
      categoria: $categoriaPelicula.value,
      descripcion: $descripcionPelicula.value,
      checked: $isCheked.checked
    };
    peliculas.push(peliculaNueva);
    console.log(peliculaNueva)
    guardarPeliculas(peliculas)
    pintarPeliculas()
    console.log(peliculas)
    
    $formCreate.reset()
    
    
    
    
}
)


const guardarPeliculas = (peliculasGuardada) => {
    const peliculasEnJSON = JSON.stringify(peliculasGuardada);
    const peliculasEnLocalStorage = localStorage.setItem("peliculas", peliculasEnJSON);
  };

  const pintarPeliculas = () => {
    $contenedorPelicula.innerHTML = "";
    let opcionesDePeliculas = "opcionesDePeliculas"
    peliculas.forEach((pelicula) => {
      const estructuraPelicula = `<tr ><th scope="row">${pelicula.codigo}</th>
      <td>${pelicula.nombre}</td>
      <td>${pelicula.categoria}</td>
      <td>${pelicula.descripcion}</td>
      <td>${pelicula.checked ? "✔️" : "✖️"}</td>
      <td class="${opcionesDePeliculas}"><img src="../assets/icons/papelera-de-reciclaje.png" alt="papelera-de-reciclaje" style="width:2vw"><img src="../assets/icons/editar.png" alt="papelera-de-reciclaje" style="width:2vw"><img src="../assets/icons/mensaje-destacado.png" alt="papelera-de-reciclaje" style="width:2vw"></td></tr>`;
      $contenedorPelicula.innerHTML += estructuraPelicula;

      
    });
  };
pintarPeliculas()


if($contenedorPelicula){
  $opcionesDePeliculas.textContent("asdasd")
}
