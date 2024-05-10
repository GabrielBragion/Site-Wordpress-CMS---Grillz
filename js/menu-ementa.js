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


function initMenu() {
  const btn = document.querySelector(".btn-hamburguer");
  const menu = document.querySelector(".menu-mobile");

  function handleMenu() {
    menu.classList.add("active");
  }

  btn.addEventListener("click", handleMenu);
}
initMenu();

function initEmenta() {
  const menu = Array.from(document.querySelector(".ementa-menu").children);
  const itens = document.querySelectorAll(".ementa-item");
  const subTitleMenuList = document.querySelectorAll(".ementa-item-titulo");

  menu[0].classList.add("active");
  itens[0].style.display = "block";
  subTitleMenuList[0].classList.add("fadeDown");

  menu.forEach((item, index) =>
    item.addEventListener("click", function () {
      selecionarOpcao(index);
    }),
  );

  function selecionarOpcao(index) {
    menu.forEach((item) => item.classList.remove("active"));
    menu[index].classList.add("active");
    itens.forEach((item) => (item.style.display = "none"));
    itens[index].style.display = "block";
    subTitleMenuList.forEach((item) => item.classList.add("fadeDown"));
  }
}
initEmenta();
