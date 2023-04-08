let destacadaEnLocalStorage = localStorage.getItem("peliDestacada");
let destacadaConvertidasJS = JSON.parse(destacadaEnLocalStorage);
let destacada = destacadaConvertidasJS


let [pelicula] = destacada
let {urlImageBigSize,nombre,genero,descripcion} = pelicula

let $contenedorSlider01 = document.querySelector("#contenedorSlider01")

let $destacado = document.querySelector("#destacado")
$destacado.innerHTML = `<div class="contenedor w-100">
<img class="w-100" src="${urlImageBigSize}"/>
<div class="centrado text-light bg-dark display-5 w-100">Titulo:${nombre}<br>Genero:${genero}<br>${descripcion}</div>
</div>`

/*<div class="w-100 bg-dark" style="position: relative;">asdasdas<img src="${urlImageBigSize}"class="w-50" alt="Pelicula destacada" draggable="false" style=" position: absolute; z-index: 2;"></div>*/

/* Envio a detalles  */

/*const idMovie = new URLSearchParams(window.location.search).get("idMovie")*/
const infoLocalStorage = JSON.parse(localStorage.getItem("peliculas"))
const movies = infoLocalStorage ? infoLocalStorage : []

const urlImageSmallSize = movies.map(movie => (movie.urlImageSmallSize) )

/*
const movieFound = movies.find(movie => movie.codigo === parseInt(idMovie))*/
/*console.log(movies)*/

/*
<li>
<a href="http://">
<img onclick="enviarInfoFilm()" src="${urlImageSmallSize}"
    width="100%" alt="...">
</a>
</li>*/


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