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
const $type1 = document.querySelector("#type1");
const $type2 = document.querySelector("#type2");
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

$modalAddMovie.addEventListener("click", function () {
  $btnSubmitCreate.innerHTML = "Agregar Contenido";
  $btnSubmitCreate.style.backgroundColor = "#0275d8";
});

$type1.addEventListener("change", function () {
  if (isCreate) {
    if ($type1.checked) {
      $btnSubmitCreate.innerHTML = "Agregar Película";
    }
  }
});

$type2.addEventListener("change", function () {
  if (isCreate) {
    if ($type2.checked) {
      $btnSubmitCreate.innerHTML = "Agregar Serie";
    }
  }
});

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
      outstanding: false, // destacado
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
  const { outstanding, noOutstanding  } = getMoviesFilter(movies)
  saveMovies(movies, "movies");
  paintMovies(noOutstanding, $containerMovie);
  paintMovies(outstanding, $containerMovieOutstanding);
  $createForm.reset();
  isCreate = true;
});

const saveMovies = (arrMovies, key) => {
  const moviesToJSON = JSON.stringify(arrMovies);
  localStorage.setItem(key, moviesToJSON);
};

const paintMovies = (arr, container) => {
  container.innerHTML = "";
  arr.forEach((movie) => {
    const structureMovie = `<tr><th scope="row" class="text-center">${
      movie.code
    }</th>
    <td class="text-center">${movie.type}</td>
    <td class="text-center">${movie.name}</td>
      <td class="text-center contentResp">${movie.genre}</td>
      <td class="text-center contentResp">${movie.description}</td>
      <td class="text-center contentResp">${movie.available ? "✔️" : "✖️"}</td>
      <td class="optionsMovie text-center">
      <button onclick="removeMovie(${
        movie.code
      })" class="btn btn-light btnTable">
      <img src="../assets/icons/papelera-de-reciclaje.png" alt="papelera-de-reciclaje" style="width:2vw" >
      </button>
      <button onclick="editMovie(${
        movie.code
      })" class="btn btn-light btnTable"    data-bs-toggle="modal"
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

const { outstanding, noOutstanding  } = getMoviesFilter(movies)
paintMovies(noOutstanding, $containerMovie);

function removeMovie(id) {
  movies = movies.filter((movie) => movie.code !== parseInt(id));
  saveMovies(movies, "movies");
  const { outstanding, noOutstanding  } = getMoviesFilter(movies)
  paintMovies(noOutstanding, $containerMovie);
  paintMovies(outstanding, $containerMovieOutstanding);
}

function editMovie(id) {
  isCreate = false;
  const movieFound = movies.find((movie) => movie.code === parseInt(id));
  $btnSubmitCreate.innerHTML = "Editar Contenido";
  $btnSubmitCreate.style.backgroundColor = "green";

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
    return movie;
  });
  const { outstanding, noOutstanding  } = getMoviesFilter(movies)

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
