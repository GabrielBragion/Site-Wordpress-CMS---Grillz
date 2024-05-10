//FUNCAO PARA O LOADIND DA PAGINA
function closeLoading() {
  document.body.classList.remove("carregando");
  window.removeEventListener("load", closeLoading)
}

if (document.readyState === "loading") {  // Ainda carregando
  document.body.classList.add("carregando");
  window.addEventListener("load", closeLoading);
} else {  // `DOMContentLoaded` foi disparado
  closeLoading();
}

//FUNCAO PARA O MENU MOBILE
function initMenu() {
  const btn = document.querySelector(".btn-hamburguer");
  const menu = document.querySelector(".menu-mobile");

  function handleMenu() {
    menu.classList.add("active");
  }

  btn.addEventListener("click", handleMenu);
}
initMenu();

