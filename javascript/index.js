let destacadaEnLocalStorage = localStorage.getItem("peliDestacada");
let destacadaConvertidasJS = JSON.parse(destacadaEnLocalStorage);
let destacada = destacadaConvertidasJS


let [pelicula] = destacada
let {urlImageBigSize} = pelicula

let $contenedorSlider01 = document.querySelector("#contenedorSlider01")

let $destacado = document.querySelector("#destacado")
$destacado.innerHTML = `<img src="${urlImageBigSize}" class="w-100" alt="Pelicula destacada" draggable="false">`

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