   /*===================================Animação ao carregar a página=======================================*/
   setInterval(function () {
    document.querySelector(".loading").classList.add("entrar")
    document.querySelector(".carregado").classList.add("entrar")
    document.querySelector(".background-barriga-do-instic").classList.add("entrar")}, 2500)



    let menuLista = document.getElementById("pesquisa")
        menuLista.style.maxWidth = "0px";

        function toggleMenu(){
        if(menuLista.style.maxWidth == "0px"){
            menuLista.style.maxWidth = "500px";
        }
        else
        {
            menuLista.style.maxWidth = "0px";
        }
}