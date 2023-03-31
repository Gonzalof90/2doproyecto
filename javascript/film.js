let $filmContainer = document.getElementById("filmContainer")
let $nombrePelicula = document.getElementById("nombrePelicula")
let $bannerPelicula = document.getElementById("bannerPelicula")
let $añoPelicula = document.getElementById("añoPelicula")
let $duracionPelicula = document.getElementById("duracionPelicula")
let $generoPelicula = document.getElementById("generoPelicula")
let $verTrailer = document.getElementById("verTrailer")
let $contenedorTrailer =document.getElementById("contenedorTrailer")
let $sinopsisPelicula = document.getElementById("sinopsisPelicula")

const idMovie = new URLSearchParams(window.location.search).get("idMovie")
const infoLocalStorage = JSON.parse(localStorage.getItem("peliculas"))
const movies = infoLocalStorage ? infoLocalStorage : []

const movieFound = movies.find(movie => movie.codigo === parseInt(idMovie))

console.log(movieFound)

$nombrePelicula.textContent = movieFound.nombre
$sinopsisPelicula.textContent = movieFound.descripcion 
$añoPelicula.textContent = movieFound.anioEstreno
$generoPelicula.textContent = movieFound.genero
$duracionPelicula.textContent = movieFound.duracionHoras

const trailer =  movieFound.urlTrailer.replace("watch?v=","embed/")

$bannerPelicula.innerHTML = `<img  src="${movieFound.urlImageBigSize}" class=" img-fluid w-100 img" alt="pelicula"></img>`

$verTrailer.addEventListener("click" , () => {
    $contenedorTrailer.innerHTML = `<iframe class="align-self-sm-center justify-content-center align-items-center" src="${trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
})

