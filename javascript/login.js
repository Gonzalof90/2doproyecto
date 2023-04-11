const $enviarMail = document.querySelector ("#enviarMail")
const $registrarse = document.querySelector ("#registrarse")
const $loginForm = document.querySelector("#loginForm")
const $emailLogin = document.querySelector ("#emailLogin")
const $passwordLogin = document.querySelector ("#passwordLogin")


$enviarMail.addEventListener ("click" ,()  => {
  Swal.fire('Mail enviado')
})


$registrarse.addEventListener ("click", () => {
  Swal.fire({
      icon: 'success',
      title: 'Genial!...',
      text: 'Te registraste con exito!',
    })
})



/*input.addEventListener('change', (e) => {
  const userFound =  users.find(user =>user.email === e.target.value)
  if(userFound){
      img.src = userFound.avatar
      img.addEventListener('error', () => {
        img.src = "https://www.image.com/imgDefaul.ong";
  })
  }
  }) */
  const userLogged = [{user: "admin@admin.com", password: "123456"},{user: "user@user.com", password: "654321"}] 
  const userToJSON = JSON.stringify(userLogged);
  localStorage.setItem( "user",userToJSON);
  const userInLocalStorage = localStorage.getItem("user");
  const userConvertedJSON = JSON.parse(userInLocalStorage)
  console.log(userConvertedJSON)
  $loginForm.addEventListener("submit", function (e){
    e.preventDefault()
    console.log(userConvertedJSON)
    const login = userConvertedJSON.filter((users) =>$emailLogin.value ===users.user)
    if (login.length) {
    window.location.replace(`/views/administracion.html`)
    } else {
      alert("el usuario no está registrado")
    }
  })