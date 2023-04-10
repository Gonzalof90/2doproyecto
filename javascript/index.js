/*let destacadaEnLocalStorage = localStorage.getItem("peliDestacada");
let destacadaConvertidasJS = JSON.parse(destacadaEnLocalStorage);
let destacada = destacadaConvertidasJS

*/
const infoLocalStorage = JSON.parse(localStorage.getItem("movies"))
console.log(infoLocalStorage)
const getMoviesFilter = (arr = []) => {
    const outstanding = arr.length
      ? arr.filter((movie) => movie.outstanding)
      : [];
  
    const noOutstanding = arr.length
      ? arr.filter((movie) => !movie.outstanding)
      : [];
  
    return { outstanding, noOutstanding };
  };

 const {outstanding,noOutstanding} = getMoviesFilter(infoLocalStorage)
  console.log(outstanding)
  console.log(noOutstanding)

let [pelicula] = outstanding
let {urlImageBigSize,name,genre,description,code} = pelicula
let $destacado = document.querySelector("#destacado")
$destacado.innerHTML = `<div class="contenedor w-100">
<a href="film.html?idMovies=${code}">
<img class="w-100" src="${urlImageBigSize}" draggable="false"/>
<div class="centrado text-light bg-dark display-5 w-100">Titulo:${name}<br>Genero:${genre}<br>Descripcion:${description}</div>
</a>
</div>`

<<<<<<< HEAD
/*<div class="w-100 bg-dark" style="position: relative;">asdasdas<img src="${urlImageBigSize}"class="w-50" alt="Pelicula destacada" draggable="false" style=" position: absolute; z-index: 2;"></div>*/

/* Envio a detalles  */

/*const idMovie = new URLSearchParams(window.location.search).get("idMovie")*/
const infoLocalStorage = JSON.parse(localStorage.getItem("movies"))
const movies = infoLocalStorage ? infoLocalStorage : []
=======
/*const movies = infoLocalStorage ? infoLocalStorage : []
>>>>>>> 0db88c7e8b473a8ff5045fcfdbf5d4304c4f7615

const urlImageSmallSize = movies.map(movie => (movie.urlImageSmallSize) )

*/
let $contenedorSlider01 = document.querySelector("#contenedorSlider01")
function pintarslider(array){
    $contenedorSlider01.innerHTML = ""
    array.forEach((pelicula)=>{const estructuraTarjeta =  `<li>
    <a href="http://">
    <img onclick="enviarInfoFilm()" src="${pelicula.urlImageSmallSize}"
        width="100%" alt="..." draggable="false">
    </a>
    </li>`
    $contenedorSlider01.innerHTML += estructuraTarjeta 
                            }
                ) 

                             }

                             pintarslider(noOutstanding)
                            console.log(pelicula.urlImageSmallSize)
