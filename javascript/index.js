const infoLocalStorage = JSON.parse(localStorage.getItem("movies"));
const getMoviesFilter = (arr = []) => {
  const outstanding = arr.length
    ? arr.filter((movie) => movie.outstanding)
    : [];

  const noOutstanding = arr.length
    ? arr.filter((movie) => !movie.outstanding)
    : [];

  return { outstanding, noOutstanding };
};

const { outstanding, noOutstanding } = getMoviesFilter(infoLocalStorage);

let [pelicula] = outstanding;
let { urlImageBigSize, name, genre, description, code } = pelicula;
let $destacado = document.querySelector("#destacado");
$destacado.innerHTML = `<div class="contenedor w-100">
<a href="film.html?idMovie=${code}" class="d-flex">
<img class="w-100 img-fluid" src="${urlImageBigSize}" draggable="false"/>
<div style="line-height:3rem" class="centrado text-start text-light w-100 container-fluid py-4 px-5 justify-content-center"><span class="display-1">${name}</span><br><span style="color:#fc7c1c">${genre}</span><br>
<p style="line-height:2rem">${description}</p>
</div>
</a>
</div>`;

let $contenedorSlider01 = document.querySelector("#contenedorSlider01");
function pintarslider(array) {
  $contenedorSlider01.innerHTML = "";
  array.forEach((pelicula) => {
    const estructuraTarjeta = `<li>
    <a href="film.html?idMovie=${pelicula.code}">
    <img onclick="enviarInfoFilm()" src="${pelicula.urlImageSmallSize}"
        width="100%" alt="..." draggable="false">
    </a>
    </li>`;
    $contenedorSlider01.innerHTML += estructuraTarjeta;
  });
}

pintarslider(noOutstanding);
