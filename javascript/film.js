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

const movieFound = movies.find(movie => movie.codigo === idMovie)

console.log(movies)
$nombrePelicula.textContent = movieFound.nombre
$sinopsisPelicula.textContent = movieFound.descripcion 
$bannerPelicula.textContent = movieFound.
$añoPelicula.textContent = movieFound.
$generoPelicula.textContent = movieFound.
$duracionPelicula.textContent = movieFound.
$contenedorTrailer.textContent = movieFound.


$verTrailer.addEventListener("click" , () => {
    $contenedorTrailer.innerHTML = `<iframe class=" " src="https://www.youtube.com/embed/yNXfOOL8824" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
})

