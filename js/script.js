const botao = document.querySelector(".icone");
const menu = document.querySelector(".menu");

botao.addEventListener("click", function(event){
    event.preventDefault();
   menu.classList.toggle("menu-aberto");


   if(menu.classList.contains("menu-aberto")){
     botao.innerHTML = "Fechar &times";
   }else{
    botao.innerHTML = "Menu  &equiv;";
   }
});