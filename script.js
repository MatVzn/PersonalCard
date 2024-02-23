const html = document.documentElement
const mailButton = html.querySelector(".mailto")
const mail = mailButton.querySelector(".status p")

mailButton.addEventListener("mouseover", function () {
  mail.textContent = "matteovoleite@gmail.com"
}) 

mailButton.addEventListener("mouseout", function () {
  mail.textContent = "Contato"
})
