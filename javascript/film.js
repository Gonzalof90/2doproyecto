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
const infoLocalStorage = JSON.parse(localStorage.getItem("movies"))
const movies = infoLocalStorage ? infoLocalStorage : []

const movieFound = movies.find(movie => movie.code === parseInt(idMovie))

console.log(movies)

$nombrePelicula.textContent = movieFound.name
$sinopsisPelicula.textContent = movieFound.description 
$añoPelicula.textContent = movieFound.releaseYear
$generoPelicula.textContent = movieFound.genre
$duracionPelicula.textContent = movieFound.durationHours

const trailer =  movieFound.urlTrailer.replace("watch?v=","embed/")

$bannerPelicula.innerHTML = `<img  src="${movieFound.urlImageBigSize}" class=" img-fluid w-100 img" alt="pelicula"></img>`

$verTrailer.addEventListener("click" , () => {
    $contenedorTrailer.innerHTML = `<iframe class="align-self-sm-center justify-content-center align-items-center col-12 col-md-8" height='500'  src="${trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
})

