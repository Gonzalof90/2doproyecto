const $enviarMail = document.querySelector ("#enviarMail")
const $registrarse = document.querySelector ("#registrarse")
const $form = document.querySelector('form');




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



input.addEventListener('change', (e) => {
  const userFound =  users.find(user =>user.email === e.target.value)
  if(userFound){
      img.src = userFound.avatar
      img.addEventListener('error', () => {
        img.src = "https://www.image.com/imgDefaul.ong";
  })
  }
  })