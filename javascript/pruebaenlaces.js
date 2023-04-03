

let destacadaEnLocalStorage = localStorage.getItem("peliDestacada");
let destacadaConvertidasJS = JSON.parse(destacadaEnLocalStorage);
let destacada = destacadaConvertidasJS
console.log(destacada)
let [pelicula] = destacada
let {urlImageBigSize} = pelicula
console.log(urlImageBigSize)