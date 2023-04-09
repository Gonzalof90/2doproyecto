/*let destacadaEnLocalStorage = localStorage.getItem("peliDestacada");
let destacadaConvertidasJS = JSON.parse(destacadaEnLocalStorage);
let destacada = destacadaConvertidasJS
let $contenedorSlider01 = document.querySelector("#contenedorSlider01")
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
let {urlImageBigSize,nombre,genero,descripcion} = pelicula
let $destacado = document.querySelector("#destacado")
$destacado.innerHTML = `<div class="contenedor w-100">
<img class="w-100" src="${urlImageBigSize}"/>
<div class="centrado text-light bg-dark display-5 w-100">Titulo:${nombre}<br>Genero:${genero}<br>${descripcion}</div>
</div>`

/*const movies = infoLocalStorage ? infoLocalStorage : []

const urlImageSmallSize = movies.map(movie => (movie.urlImageSmallSize) )


function pintarslider(array){
    $contenedorSlider01.innerHTML = ""
    array.forEach((pelicula)=>{const estructuraTarjeta =  `<li>
    <a href="http://">
    <img onclick="enviarInfoFilm()" src="${pelicula.urlImageSmallSize}"
        width="100%" alt="...">
    </a>
    </li>`
    $contenedorSlider01.innerHTML += estructuraTarjeta 
                            }
                ) 

                             }

                             pintarslider(movies)
                            console.log(pelicula.urlImageSmallSize)

                            */