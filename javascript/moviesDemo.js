// películas para el localstorage demo

const moviesDemo = [
  {
    available: true,
    code: 2191163,
    description:
      "La reina Ramonda, Shuri, M’Baku, Okoye y Dora Milaje luchan por proteger a su nación de intervenir en el mundo a raíz de la muerte del rey T’Challa. Mientras los Wakandans se esfuerzan por abrazar su próximo capítulo, los héroes deben unirse con la ayuda de War Dog Nakia y Everett Ross y forjar un nuevo camino para el reino de Wakanda",
    durationHours: "2h 41m",
    genre: "Acción/Ciencia ficción",
    name: "Pantera Negra: Wakanda por siempre",
    outstanding: true,
    releaseYear: "2022",
    type: "movie",
    urlImageBigSize:
      "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/384566/384566_1140x516.jpg",
    urlImageSmallSize:
      "https://pics.filmaffinity.com/Pantera_Negra_Wakanda_por_siempre-869269163-large.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=BPjbiZQmBI4",
  },
  {
    available: true,
    code: 2134187,
    description:
      "Poner más de una década después de los acontecimientos de la primera película, aprender la historia de la familia Sully (Jake, Neytiri, y sus hijos), el problema que les sigue, las longitudes que van a mantenerse a salvo, las batallas que luchan para mantenerse vivos, y las tragedias que soportan.",
    durationHours: "3h 2m",
    genre: "Acción/Ciencia ficción",
    name: "Avengers: Endgame",
    outstanding: false,
    releaseYear: "2019",
    type: "movie",
    urlImageBigSize: "https://i.blogs.es/295b25/slack-imgs/1366_521.jpeg",
    urlImageSmallSize:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
  },
  {
    available: true,
    code: 2166178,
    description:
      "Una exploración de las aventuras, las desgarradoras experiencias y las hazañas del legendario asesino a sueldo, John Wick..",
    durationHours: "2h 49m",
    genre: "Acción/Neo-noir",
    name: "John Wick 4",
    outstanding: false,
    releaseYear: 2023,
    type: "movie",
    urlImageBigSize:
      "https://suprobhatbangladesh.com/wp-content/uploads/2022/12/John-Wick-Chapter4-Banner.jpg",
    urlImageSmallSize:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/gh2bmprLtUQ8oXCSluzfqaicyrm.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=yjRHZEUamCc",
  },
  {
    available: true,
    code: 1191161,
    description:
      "Diana, hija de dioses y princesa de las amazonas, nunca ha salido de su isla. Un día, en el contexto de la Primera Guerra Mundial, un piloto americano se estrella en su isla y Diana salva su vida; el piloto le explica que se está desarrollando una gran guerra que puede devastar el mundo, y Diana parte a la batalla..",
    durationHours: "2h 21m",
    genre: "Acción/Aventura",
    name: "Mujer Maravilla",
    outstanding: false,
    releaseYear: 2017,
    type: "movie",
    urlImageBigSize:
      "https://moviefilmsla.files.wordpress.com/2017/05/wonder_facebook_v2_moviefilms.png",
    urlImageSmallSize:
      "https://1.bp.blogspot.com/-qKjL-hPX4Oo/WNXOZwG_lPI/AAAAAAAAuuc/51fe4ijF00k_43fga05H4wrJASXG0M80wCLcB/s1600/Wonder%2BWoman.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=R3wDsbkybVw",
  },
  {
    available: true,
    code: 1191171,
    description:
      "La pareja de superhéroes Scott Lang y Hope van Dyne regresa para continuar sus aventuras como Ant-Man y la Avispa. Los dos, junto a los padres de Hope, Hank Pym y Janet van Dyne y la hija de Scott, Cassie Lang, se dedican a explorar el Mundo Cuántico, interactuando con nuevas y extrañas criaturas y embarcándose en una aventura que les llevará más allá de los límites de lo que creían posible.",
    durationHours: "2h 34m",
    genre: "Acción/Aventura/Ciencia ficción",
    name: "Ant-Man y la Avispa",
    outstanding: false,
    releaseYear: 2023,
    type: "movie",
    urlImageBigSize:
      "https://i.blogs.es/c2780f/cartel-ant-man-y-la-avispa/1366_2000.jpg",
    urlImageSmallSize:
      "https://es.web.img3.acsta.net/pictures/18/07/03/13/52/3276833.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=BaLJ044I2HI",
  },
  {
    code: 1191110,
    type: "película",
    name: "Viuda Negra",
    description:
      "Después de los eventos de Capitán América: Civil War, Natasha Romanoff se enfrenta a su pasado y a una peligrosa conspiración que se relaciona con su historia anterior como espía.",
    genre: "Acción/Aventura",
    durationHours: "2h 13m",
    releaseYear: 2021,
    outstanding: false,
    available: true,
    urlImageSmallSize:
      "https://es.web.img3.acsta.net/pictures/20/03/09/18/28/5915477.jpg",
    urlImageBigSize:
      "https://www.tonica.la/__export/1600117063114/sites/debate/img/2020/09/14/black-widow-lanzarx-2-nuevos-trailer.jpg_1902800913.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=HlB_8y3cmUg",
  },
  {
    code: 1234142,
    type: "película",
    name: "Sin tiempo para morir 007",
    description:
      "James Bond ha dejado el servicio activo y disfruta de una vida tranquila en Jamaica. Pero su paz se ve temporalmente interrumpida cuando un viejo amigo de la CIA aparece pidiendo ayuda.",
    genre: "Acción/Aventura",
    durationHours: "2h 43m",
    releaseYear: 2021,
    outstanding: false,
    available: true,
    urlImageSmallSize:
      "https://media.revistagq.com/photos/6142fbda9fc42a0403281f0e/master/w_1600%2Cc_limit/sin-tiempo-para-morir-daniel-craig-1575383428.jpg",
    urlImageBigSize:
      "https://i.blogs.es/985dec/thumb-1920-1064725/1366_2000.jpg",
    urlTrailer: "https://www.youtube.com/watch?v=bx9DZ9gDmeo",
  },
  {
    code: 1234144,
    type: "película",
    name: "El proyecto Adam",
    description:
      "Tras un aterrizaje forzoso en 2022, Adam Reed, un piloto de combate y viajero del tiempo, forma equipo consigo mismo cuando tenía 12 años para salvar el futuro. Ve todo lo que quieras. Una aventura de ciencia ficción dirigida por Shawn Levy.",
    genre: "Ciencia ficción/Drama",
    durationHours: "1h 47m",
    releaseYear: 2023,
    outstanding: false,
    available: true,
    urlImageSmallSize:
      "https://pics.filmaffinity.com/El_proyecto_Adam-392719853-large.jpg",
    urlImageBigSize:
      "https://diario24.ar/wp-content/uploads/2022/02/El-proyecto.png",
    urlTrailer: "https://www.youtube.com/watch?v=AxQXlXpiHBg",
  },
  {
    code: 1234147,
    type: "película",
    name: "Dune",
    description:
      "Paul Atreides lidera a las fuerzas nativas para luchar contra las fuerzas de la opresión imperial que controlan el planeta desértico de Arrakis.",
    genre: "Acción/Aventura",
    durationHours: "2h 35m",
    releaseYear: 2021,
    outstanding: false,
    available: true,
    urlImageSmallSize: "https://pics.filmaffinity.com/Dune-209834814-large.jpg",
    urlImageBigSize: "https://i.blogs.es/2af678/dune-cartel/1366_2000.jpeg",
    urlTrailer: "https://www.youtube.com/watch?v=TTgk_iT8Uts",
  },
];

const peliculasToJSON = JSON.stringify(moviesDemo);
localStorage.setItem("movies", peliculasToJSON);
