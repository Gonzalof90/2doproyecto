const generateId = () => Math.floor(Math.random() * 9999999);
/* **********************************
-------------- MODAL ------------- 
   ********************************** */
// Elementos de formulario
const $codeMovie = document.querySelector("#codeMovie");
const $nameMovie = document.querySelector("#nameMovie");
const $genreMovie = document.querySelector("#genreMovie");
const $descriptionMovie = document.querySelector("#descriptionMovie");
const $availableMovieCheck = document.querySelector("#availableMovieCheck");
const $typeMovie = document.querySelector("#typeMovie");
const $typeSerie = document.querySelector("#typeSerie");
const $releaseYear = document.querySelector("#releaseYear");
const $urlImageBigSize = document.querySelector("#urlImageBigSize");
const $urlImageSmallSize = document.querySelector("#urlImageSmallSize");
const $urlTrailer = document.querySelector("#urlTrailer");
const $durationHours = document.querySelector("#durationHours");
const $createForm = document.querySelector("#createForm");
const $btnSubmitCreate = document.querySelector("#btnSubmitCreate");
const $modalAddMovie = document.querySelector("#modalAddMovie");

/*  **********************************
  ----------------- TABLAS --------------- 
  **********************************  */
const $optionsMovie = document.querySelector(".optionsMovie");

// Administrar Contenido
const $containerMovie = document.querySelector("#containerMovies");

// Contenido Destacado
const $containerMovieOutstanding = document.querySelector(
  "#containerMovieOutstanding"
);

const $sectionTable2 = document.querySelector(".section-table-2");
const $titleOutstanding = document.querySelector("#titleOutstanding");
const $tableOutstanding = document.querySelector("#tableOutstanding");

let moviesTesting = false;

// STORAGE
const moviesInLocalStorage = localStorage.getItem("movies");
const moviesConvertedJSON = JSON.parse(moviesInLocalStorage);

// GLOBALES
let isCreate = true;
let movies = moviesConvertedJSON ? moviesConvertedJSON : [];

const getMoviesFilter = (arr = []) => {
  const outstanding = arr.length
    ? arr.filter((movie) => movie.outstanding)
    : [];

  const noOutstanding = arr.length
    ? arr.filter((movie) => !movie.outstanding)
    : [];

  return { outstanding, noOutstanding };
};

const changeAccordingFormAction = (element, textContent, bgColor) => {
  element.addEventListener("click", function () {
    $btnSubmitCreate.innerHTML = textContent;
    $btnSubmitCreate.style.backgroundColor = bgColor;

    changeMsgAccordingType($typeMovie, "Agregar Película", isCreate);
    changeMsgAccordingType($typeSerie, "Agregar Serie", isCreate);
  });
};

changeAccordingFormAction($modalAddMovie, "Agregar Contenido", "#0275d8");

const changeMsgAccordingType = (element, textContent) => {
  element.addEventListener("change", function (e) {
    if (element.checked) {
      $btnSubmitCreate.innerHTML = textContent;
    }
  });
};

function getType() {
  let radioElements = document.getElementsByName("type");
  let radioSelected = Array.from(radioElements).find((radio) => radio.checked);
  return radioSelected.value;
}

$createForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (isCreate) {
    const newMovie = {
      code: generateId(),
      type: getType(),
      name: $nameMovie.value,
      genre: $genreMovie.value,
      description: $descriptionMovie.value,
      available: $availableMovieCheck.checked,
      urlImageBigSize: $urlImageBigSize.value,
      urlImageSmallSize: $urlImageSmallSize.value,
      urlTrailer: $urlTrailer.value,
      durationHours: $durationHours.value,
      releaseYear: $releaseYear.value,
      outstanding: false,
    };
    movies.push(newMovie);
  } else {
    movies = movies.map((movie) => {
      if (movie.code === parseInt($codeMovie.value)) {
        return {
          code: movie.code,
          type: getType(),
          name: $nameMovie.value,
          genre: $genreMovie.value,
          description: $descriptionMovie.value,
          available: $availableMovieCheck.checked,
          urlImageBigSize: $urlImageBigSize.value,
          urlImageSmallSize: $urlImageSmallSize.value,
          urlTrailer: $urlTrailer.value,
          durationHours: $durationHours.value,
          releaseYear: $releaseYear.value,
          outstanding: movie.outstanding,
        };
      }
      return movie;
    });
  }
  const { outstanding, noOutstanding } = getMoviesFilter(movies);
  saveMovies(movies, "movies");
  paintMovies(noOutstanding, $containerMovie);
  paintMovies(outstanding, $containerMovieOutstanding);

  if ($createForm.checkValidity()) {
    //cerrar el modal
    closeModal();
  }

  $createForm.reset();
  isCreate = true;
});

const saveMovies = (arrMovies, key) => {
  const moviesToJSON = JSON.stringify(arrMovies);
  localStorage.setItem(key, moviesToJSON);
};


// function close modal
const $modal = document.querySelector("#staticBackdrop");

function closeModal() {
  $modal.style.display = "none";
}

const paintMovies = (arr, container) => {
  container.innerHTML = "";
  arr.forEach((movie) => {
    const structureMovie = `<tr class="gonza"><th scope="row" class="text-center ">${
      movie.code
    }</th>
    <td class="text-center">${movie.type}</td>
    <td class="text-center">${movie.name}</td>
      <td class="text-center contentResp">${movie.genre}</td>
      <td class="text-center descrip contentResp">${movie.description}</td>
      <td class="text-center contentResp">${movie.available ? "✔️" : "✖️"}</td>
      <td class="optionsMovie text-center">
      <button onclick="removeMovie(${
        movie.code
      })" class="btn btn-light btnTable">
      <img src="../assets/icons/papelera-de-reciclaje.png" alt="papelera-de-reciclaje" style="width:2vw" >
      </button>
      <button onclick="editMovie(${
        movie.code
      })" class="btn btn-light btnTable" data-bs-toggle="modal"
      data-bs-target="#staticBackdrop">
      <img src="../assets/icons/editar.png" alt="icono_de_editar" style="width:2vw">
      </button>

      <button onclick="toggleOutstandingMovie(${
        movie.code
      })"  class="btn btn-light btnTable">
      <img src="../assets/icons/${
        movie.outstanding ? "destacado" : "mensaje-destacado"
      }.png" alt="papelera-de-reciclaje" style="width:2vw"></td></tr>
      </button>
      
      `;

    container.innerHTML += structureMovie;
  });
};

const showTableOutstanding = (outstanding) => {
  if (outstanding.length) {
    $sectionTable2.classList.add("d-block");
    $sectionTable2.classList.remove("d-none");
  } else {
    $sectionTable2.classList.remove("d-block");
    $sectionTable2.classList.add("d-none");
  }
};

const { outstanding, noOutstanding } = getMoviesFilter(movies);

paintMovies(noOutstanding, $containerMovie);
paintMovies(outstanding, $containerMovieOutstanding);
showTableOutstanding(outstanding);

paintMovies(outstanding, $containerMovieOutstanding);
function removeMovie(id) {
  movies = movies.filter((movie) => movie.code !== parseInt(id));
  saveMovies(movies, "movies");
  const { outstanding, noOutstanding } = getMoviesFilter(movies);
  paintMovies(noOutstanding, $containerMovie);
  paintMovies(outstanding, $containerMovieOutstanding);
}

const capitalize = (text = "") =>
  text[0].toUpperCase() + text.slice(1).toLowerCase();

function editMovie(id) {
  isCreate = false;
  const movieFound = movies.find((movie) => movie.code === parseInt(id));
  $btnSubmitCreate.innerHTML = `Editar ${capitalize(movieFound.type)}`;
  $btnSubmitCreate.style.backgroundColor = "green";
  changeMsgAccordingType($typeMovie, "Editar Película");
  changeMsgAccordingType($typeSerie, "Editar Serie");

  if (movieFound.type === "movie") {
    $typeMovie.checked = true;
  } else {
    $typeSerie.checked = true;
  }

  $codeMovie.value = movieFound.code;
  $nameMovie.value = movieFound.name;
  $genreMovie.value = movieFound.genre;
  $descriptionMovie.value = movieFound.description;
  $availableMovieCheck.checked = movieFound.available;
  $urlImageBigSize.value = movieFound.urlImageBigSize;
  $urlImageSmallSize.value = movieFound.urlImageSmallSize;
  $urlTrailer.value = movieFound.urlTrailer;
  $durationHours.value = movieFound.durationHours;
  $releaseYear.value = movieFound.releaseYear;
}

function toggleOutstandingMovie(id) {
  movies = movies.map((movie) => {
    if (movie.code === parseInt(id)) {
      return {
        ...movie,
        outstanding: !movie.outstanding,
      };
    }
    return {
      ...movie,
      outstanding: false,
    };
  });

  const { outstanding, noOutstanding } = getMoviesFilter(movies);

  showTableOutstanding(outstanding);
  console.log(outstanding.length);
  if (outstanding.length) {
    $sectionTable2.classList.add("d-block");
    $sectionTable2.classList.remove("d-none");
  } else {
    $sectionTable2.classList.remove("d-block");
    $sectionTable2.classList.add("d-none");
  }

  saveMovies(movies, "movies");
  paintMovies(noOutstanding, $containerMovie);
  paintMovies(outstanding, $containerMovieOutstanding);
}

// amdmin en local storage
const userLogged = [
  { user: "admin@admin.com", password: "123456" },
  { user: "user@user.com", password: "654321" },
];
const userToJSON = JSON.stringify(userLogged);
localStorage.setItem("user", userToJSON);

// peliculas para el localstorage demo

const peliculas = [
  {
    available: true,
    code: 2191163,
    description:
      "La reina Ramonda, Shuri, M’Baku, Okoye y Dora Milaje luchan por proteger a su nación de intervenir en el mundo a raíz de la muerte del rey T’Challa. Mientras los Wakandans se esfuerzan por abrazar su próximo capítulo, los héroes deben unirse con la ayuda de War Dog Nakia y Everett Ross y forjar un nuevo camino para el reino de Wakanda",
    durationHours: "234",
    genre: "accion aventura ciencia ficcion",
    name: "Pantera Negra: Wakanda por siempre",
    outstanding: true,
    releaseYear: "234",
    type: "movie",
    urlImageBigSize:
      "https://w0.peakpx.com/wallpaper/83/580/HD-wallpaper-movie-black-panther-wakanda-forever.jpg",
    urlImageSmallSize:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/u8BMLmwoc7YPHKSWawOOqC1c8lJ.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=ffTFm4vFLGk",
  },
  {
    available: true,
    code: 2134187,
    description:
      "Poner más de una década después de los acontecimientos de la primera película, aprender la historia de la familia Sully (Jake, Neytiri, y sus hijos), el problema que les sigue, las longitudes que van a mantenerse a salvo, las batallas que luchan para mantenerse vivos, y las tragedias que soportan.",
    durationHours: "234",
    genre: "accion aventura ciencia ficcion",
    name: "Pantera Negra: Wakanda por siempre",
    outstanding: false,
    releaseYear: "234",
    type: "movie",
    urlImageBigSize:
      "https://evdboxeo.com/wp-content/uploads/2021/03/Creed-3.jpg",
    urlImageSmallSize:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/xCxwaQeoIr4FcjlPgHfzog0x4B8.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=gtlg3P2lrts",
  },
  {
    available: true,
    code: 2166178,
    description:
      "John Wick descubre un camino para derrotar a La Mesa. Pero antes de poder ganar su libertad, Wick deberá enfrentarse a un nuevo enemigo con poderosas alianzas en todo el mundo; y contra las fuerzas que convierten a viejos amigos en enemigos.",
    durationHours: "234",
    genre: "accion aventura ciencia ficcion",
    name: "Pantera Negra: Wakanda por siempre",
    outstanding: false,
    releaseYear: "234",
    type: "movie",
    urlImageBigSize:
      "https://super-ficcion.com/wp-content/uploads/2020/05/Shazam-2-Zachary-Levi.jpg",
    urlImageSmallSize:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/bqOqQ2Tawum3eHKNrc94P4EeaZB.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=gtlg3P2lrts",
  },
  {
    available: true,
    code: 1191161,
    description:
      "Puss en Boots descubre que su pasión por la aventura ha cobrado su peaje: Ha quemado a través de ocho de sus nueve vidas, dejándolo con una sola vida. Puss se pone en un viaje épico para encontrar el mítico Último Deseo y restaurar sus nueve vidas.",
    durationHours: "234",
    genre: "accion aventura ciencia ficcion",
    name: "Pantera Negra: Wakanda por siempre",
    outstanding: false,
    releaseYear: "234",
    type: "movie",
    urlImageBigSize:
      "https://w0.peakpx.com/wallpaper/83/580/HD-wallpaper-movie-black-panther-wakanda-forever.jpg",
    urlImageSmallSize:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/zNKs1T0VZuJiVuhuL5GSCNkGdxf.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=gtlg3P2lrts",
  },
  {
    available: true,
    code: 1191171,
    description:
      "La pareja de superhéroes Scott Lang y Hope van Dyne regresa para continuar sus aventuras como Ant-Man y la Avispa. Los dos, junto a los padres de Hope, Hank Pym y Janet van Dyne y la hija de Scott, Cassie Lang, se dedican a explorar el Mundo Cuántico, interactuando con nuevas y extrañas criaturas y embarcándose en una aventura que les llevará más allá de los límites de lo que creían posible.",
    durationHours: "234",
    genre: "accion aventura ciencia ficcion",
    name: "Pantera Negra: Wakanda por siempre",
    outstanding: false,
    releaseYear: "234",
    type: "movie",
    urlImageBigSize:
      "https://w0.peakpx.com/wallpaper/83/580/HD-wallpaper-movie-black-panther-wakanda-forever.jpg",
    urlImageSmallSize:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/dAwvE6Vd4mhlx2xJU6PqjBAM2y5.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=gtlg3P2lrts",
  },
  {
    available: true,
    code: 1191110,
    description:
      "La reina Ramonda, Shuri, M’Baku, Okoye y Dora Milaje luchan por proteger a su nación de intervenir en el mundo a raíz de la muerte del rey T’Challa. Mientras los Wakandans se esfuerzan por abrazar su próximo capítulo, los héroes deben unirse con la ayuda de War Dog Nakia y Everett Ross y forjar un nuevo camino para el reino de Wakanda",
    durationHours: "234",
    genre: "accion aventura ciencia ficcion",
    name: "Pantera Negra: Wakanda por siempre",
    outstanding: false,
    releaseYear: "234",
    type: "movie",
    urlImageBigSize:
      "https://w0.peakpx.com/wallpaper/83/580/HD-wallpaper-movie-black-panther-wakanda-forever.jpg",
    urlImageSmallSize:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/rzAShiFrU6tSSr9gLD5AxKKwtOo.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=gtlg3P2lrts",
  },
  {
    available: true,
    code: 1191112,
    description:
      "La reina Ramonda, Shuri, M’Baku, Okoye y Dora Milaje luchan por proteger a su nación de intervenir en el mundo a raíz de la muerte del rey T’Challa. Mientras los Wakandans se esfuerzan por abrazar su próximo capítulo, los héroes deben unirse con la ayuda de War Dog Nakia y Everett Ross y forjar un nuevo camino para el reino de Wakanda",
    durationHours: "234",
    genre: "accion aventura ciencia ficcion",
    name: "Pantera Negra: Wakanda por siempre",
    outstanding: false,
    releaseYear: "234",
    type: "movie",
    urlImageBigSize:
      "https://w0.peakpx.com/wallpaper/83/580/HD-wallpaper-movie-black-panther-wakanda-forever.jpg",
    urlImageSmallSize:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/aCy61aU7BMG7SfhkaAaasS0KzUO.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=gtlg3P2lrts",
  },
  {
    available: true,
    code: 1194112,
    description:
      "La reina Ramonda, Shuri, M’Baku, Okoye y Dora Milaje luchan por proteger a su nación de intervenir en el mundo a raíz de la muerte del rey T’Challa. Mientras los Wakandans se esfuerzan por abrazar su próximo capítulo, los héroes deben unirse con la ayuda de War Dog Nakia y Everett Ross y forjar un nuevo camino para el reino de Wakanda",
    durationHours: "234",
    genre: "accion aventura ciencia ficcion",
    name: "Pantera Negra: Wakanda por siempre",
    outstanding: false,
    releaseYear: "234",
    type: "movie",
    urlImageBigSize:
      "https://w0.peakpx.com/wallpaper/83/580/HD-wallpaper-movie-black-panther-wakanda-forever.jpg",
    urlImageSmallSize:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/aCy61aU7BMG7SfhkaAaasS0KzUO.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=gtlg3P2lrts",
  },
  {
    available: true,
    code: 1443112,
    description:
      "La reina Ramonda, Shuri, M’Baku, Okoye y Dora Milaje luchan por proteger a su nación de intervenir en el mundo a raíz de la muerte del rey T’Challa. Mientras los Wakandans se esfuerzan por abrazar su próximo capítulo, los héroes deben unirse con la ayuda de War Dog Nakia y Everett Ross y forjar un nuevo camino para el reino de Wakanda",
    durationHours: "234",
    genre: "accion aventura ciencia ficcion",
    name: "Pantera Negra: Wakanda por siempre",
    outstanding: false,
    releaseYear: "234",
    type: "movie",
    urlImageBigSize:
      "https://w0.peakpx.com/wallpaper/83/580/HD-wallpaper-movie-black-panther-wakanda-forever.jpg",
    urlImageSmallSize:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/aCy61aU7BMG7SfhkaAaasS0KzUO.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=gtlg3P2lrts",
  },
  {
    available: true,
    code: 14451112,
    description:
      "La reina Ramonda, Shuri, M’Baku, Okoye y Dora Milaje luchan por proteger a su nación de intervenir en el mundo a raíz de la muerte del rey T’Challa. Mientras los Wakandans se esfuerzan por abrazar su próximo capítulo, los héroes deben unirse con la ayuda de War Dog Nakia y Everett Ross y forjar un nuevo camino para el reino de Wakanda",
    durationHours: "234",
    genre: "accion aventura ciencia ficcion",
    name: "Pantera Negra: Wakanda por siempre",
    outstanding: false,
    releaseYear: "234",
    type: "movie",
    urlImageBigSize:
      "https://w0.peakpx.com/wallpaper/83/580/HD-wallpaper-movie-black-panther-wakanda-forever.jpg",
    urlImageSmallSize:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/aCy61aU7BMG7SfhkaAaasS0KzUO.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=gtlg3P2lrts",
  },
  {
    available: true,
    code: 1192212,
    description:
      "La reina Ramonda, Shuri, M’Baku, Okoye y Dora Milaje luchan por proteger a su nación de intervenir en el mundo a raíz de la muerte del rey T’Challa. Mientras los Wakandans se esfuerzan por abrazar su próximo capítulo, los héroes deben unirse con la ayuda de War Dog Nakia y Everett Ross y forjar un nuevo camino para el reino de Wakanda",
    durationHours: "234",
    genre: "accion aventura ciencia ficcion",
    name: "Pantera Negra: Wakanda por siempre",
    outstanding: false,
    releaseYear: "234",
    type: "movie",
    urlImageBigSize:
      "https://w0.peakpx.com/wallpaper/83/580/HD-wallpaper-movie-black-panther-wakanda-forever.jpg",
    urlImageSmallSize:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/aCy61aU7BMG7SfhkaAaasS0KzUO.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=gtlg3P2lrts",
  },
];

// const peliculasToJSON = JSON.stringify(peliculas);
// localStorage.setItem("movies", peliculasToJSON);

function toggleTesting() {
  moviesTesting = !moviesTesting;
  console.log(moviesTesting);
  if (moviesTesting) {
    saveMovies(peliculas, "movies");
  } else {
    saveMovies([], "movies");
  }
}
