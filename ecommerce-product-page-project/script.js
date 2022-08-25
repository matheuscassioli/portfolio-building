 
function aparecerMenuLateral(){ // ABRE MENU LATERAL 
    document.getElementById("elemento").classList.remove('invible-menu-lateral');// REMOVE CLASSE 1
    elemento.classList.add('invible-menu-lateral2');  // ADICIONA CLASSE 2
    
    document.body.style.backgroundColor = 'black'; // BODY PRETO PÓS ABRIR MEU LATERAL

    document.getElementById("menu-icone").classList.add('menu-icon2');  //  ADICIONA CLASSE PARA INVERTER COR DO HAMBURGUER MENU

    document.getElementById("conteudo-direita").classList.remove('right-side');// REMOVE CLASSE DA DIREITA 
    document.getElementById("conteudo-direita").classList.add('right-side2');  // ADICIONA CLASSE COM DISPLAY NENHUM PARA FUNDO FICAR PRETO

    document.getElementById("linha-separadora").classList.remove('hr');// REMOVE CLASSE DA LINHA
    document.getElementById("linha-separadora").classList.add('hr2');  // ADICIONA CLASSE COM DISPLAY NENHUM PARA SUMIR COM A LINHA

    document.getElementById("carrinho-direita").classList.add('img-mincar2');  // ADICIONA CLASSE PARA INVERTER COR DO CARRINHO

    document.getElementById("imagem-produto-principal").classList.remove('big-img-top');// REMOVE CLASSE DA LINHA
    document.getElementById("imagem-produto-principal").classList.add('big-img-top2');  // ADICIONA CLASSE COM DISPLAY NENHUM PARA SUMIR COM A LINHA

}
function fecharMenu(){   // FECHA MENU LATERAL 
    document.getElementById("elemento").classList.remove('invible-menu-lateral2');
    elemento.classList.add('invible-menu-lateral'); 
    document.body.style.backgroundColor = 'white';
    document.getElementById("menu-icone").classList.remove('menu-icon2'); 

    document.getElementById("conteudo-direita").classList.remove('right-side2');// REMOVE CLASSE 1
    document.getElementById("conteudo-direita").classList.add('right-side');  

    document.body.style.backgroundColor = 'white'; // BODY PRETO PÓS ABRIR MEU LATERAL

    document.getElementById("linha-separadora").classList.remove('hr2');// REMOVE CLASSE DA LINHA
    document.getElementById("linha-separadora").classList.add('hr');  // ADICIONA CLASSE COM DISPLAY NENHUM PARA SUMIR COM A LINHA

    document.getElementById("imagem-produto-principal").classList.remove('big-img-top2');// REMOVE CLASSE DA LINHA
    document.getElementById("imagem-produto-principal").classList.add('big-img-top');  // ADICIONA CLASSE COM DISPLAY NENHUM PARA SUMIR COM A LINHA
}

//SCRIPT-BOTÃO-INCREMENTAR-DESCREMENTAR

var counterVal = 0; 

function incrementClick() {
    updateDisplay(++counterVal);
}
function decrementClick() {
    updateDisplay(--counterVal);
    {
        if (counterVal == -1) {
            alert("APENAS QUANTIDADES ACIMA DE 0");
            updateDisplay(counterVal = 0);
        }
    }
}
function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}


