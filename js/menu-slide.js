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

function initSlide() {
  const fotosSlide = document.querySelectorAll(".slide-img");

  if (fotosSlide.length >= 0) {
    const btnNext = document.querySelector(".btn-proximo-slide");
    const btnPrev = document.querySelector(".btn-voltar-slide");
    const wrapBolinhas = document.querySelector(".wrap-bolinhas-slide");
    const widthFoto = fotosSlide[0].offsetWidth;
    let count = 1;
    //Loop para criar bolinhas de acordo com a quantidade de fotos do slide
    for (let bolinhas = 0; bolinhas <= fotosSlide.length - 1; bolinhas++) {
      const bolinha = document.createElement("span");
      bolinha.classList.add("bolinhas-slide");
      wrapBolinhas.appendChild(bolinha);
    }

    //Ativa primeira bolinha da lista
    wrapBolinhas.childNodes[1].classList.add("active");

    //Avança para proximo slide e bolinha
    function proximoSlide() {
      if (count <= fotosSlide.length - 1) {
        count++;
      }
      fotosSlide.forEach(
        (item) =>
          (item.style.transform = `translate(-${widthFoto * (count - 1)}px)`),
      );
      wrapBolinhas.childNodes[count - 1].classList.remove("active");
      wrapBolinhas.childNodes[count].classList.add("active");
    }

    //Retorna para anterior slide e bolinha
    function voltarSlide() {
      if (count > 1) {
        count--;
      }
      fotosSlide.forEach(
        (item) =>
          (item.style.transform = `translate(-${widthFoto * (count - 1)}px)`),
      );
      wrapBolinhas.childNodes[count + 1].classList.remove("active");
      wrapBolinhas.childNodes[count].classList.add("active");
    }

    //Adiciona eventListnner aos botões
    btnNext.addEventListener("click", proximoSlide);
    btnPrev.addEventListener("click", voltarSlide);
  }
}
initSlide();
