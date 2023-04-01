let $image1 = document.querySelector("#image1")
let $image2 = document.querySelector("#image2")
let $image3 = document.querySelector("#image3")

const infoLocalStorage = JSON.parse(localStorage.getItem("peliculas"))
console.log(typeof(infoLocalStorage))
console.log(infoLocalStorage)
const [pelicula1, pelicula2, pelicula3] = infoLocalStorage
console.log(pelicula1)
console.log(pelicula2)
const {urlImageBigSize: url1, nombre: nombre1} = pelicula1
const {urlImageBigSize: url2, nombre: nombre2} = pelicula2
const {urlImageBigSize: url3, nombre: nombre3} = pelicula3
console.log(url1)
console.log(url2)


$image1.innerHTML = `<img  src="${url1}" alt=""><h2>Titulo:${nombre1}</h2>`
$image2.innerHTML = `<img  src="${url2}" alt=""><h2>Titulo:${nombre2}</h2>`
$image3.innerHTML = `<img  src="${url3}" alt=""><h2>Titulo:${nombre3}</h2>`
