const botao = document.querySelector(".btn-menu")
const menu = document.querySelector(".menu nav")

botao.addEventListener("click", () =>{
    menu.classList.toggle("ativo");
    botao.classList.toggle("ativo")
});