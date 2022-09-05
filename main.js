const controls = document.querySelectorAll(".control"); // seleciona todos os elementos control e armazena na variável control
let currentItem = 0;                                    // item atual 
const items = document.querySelectorAll(".item");       // armazena todos item na variavel item
const maxItems = items.length;                          // itens totais armazena na variavel maxItens

controls.forEach((control) => {                         
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("projetos__arrow-left");

    if (isLeft) {   
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item")); 

    items[currentItem].scrollIntoView({
      behavior: "smooth",  // suaviza transição
      inline: "center"  // suaviza transição
    });

    items[currentItem].classList.add("current-item"); // quando o item for o atual = add classe current
  });
});