
function aparecerMenu() {
    document.getElementById('elemento').classList.remove('menu-invisible');
    elemento.classList.add('menu-invisible2');
}

function fecharMenu() {
    document.getElementById('elemento').classList.remove('menu-invisible2');
    elemento.classList.add('menu-invisible');

}

function abrirDropLat() {

    document.getElementById('featureslateral').classList.remove('drop-down-lateral');
    featureslateral.classList.add('drop-down-lateral2');

    document.getElementById('uparrow').classList.remove('up-arrow');
    uparrow.classList.add('up-arrow2');

    document.getElementById('down-arrow').classList.add('down-arrow2');
}

function abrirDropLat2() {

    document.getElementById('companylateral').classList.remove('drop-down-lateral');
    companylateral.classList.add('drop-down-lateral2');

    document.getElementById('downarrow3').classList.remove('downarrow3');
    downarrow3.classList.add('downarrow4');

    document.getElementById('uparrow3').classList.add('uparrow4');
}

function fecharDropLat() {

    document.getElementById('featureslateral').classList.remove('drop-down-lateral2');
    featureslateral.classList.add('drop-down-lateral');


    document.getElementById('uparrow').classList.remove('up-arrow2');
    uparrow.classList.add('up-arrow');

    document.getElementById('down-arrow').classList.remove('down-arrow2');
}

function fecharDropLat2() {

    document.getElementById('companylateral').classList.remove('drop-down-lateral2');
    companylateral.classList.add('drop-down-lateral');

    document.getElementById('downarrow3').classList.remove('downarrow4');
    downarrow3.classList.add('downarrow3');

    document.getElementById('uparrow3').classList.remove('uparrow4');
}

function showDropDown() { 
    document.getElementById('showdropdown').classList.remove('drop-down');
    showdropdown.classList.add('drop-down2')

    document.getElementById('idimgdownarrow').classList.remove('img-down-arrow');
    idimgdownarrow.classList.add('img-down-arrow2');

    document.getElementById('idimguparrow').classList.remove('img-up-arrow');
    idimguparrow.classList.add('img-up-arrow2')
}


function hideDropDown() {

    document.getElementById('showdropdown').classList.remove('drop-down2');
    showdropdown.classList.add('drop-down');

    document.getElementById('idimgdownarrow').classList.remove('img-down-arrow2');
    idimgdownarrow.classList.add('img-down-arrow');


    document.getElementById('idimguparrow').classList.remove('img-up-arrow2');
    idimguparrow.classList.add('img-up-arrow');
}




function showDropDown2() {

    document.getElementById('showdropdown2').classList.remove('drop-down-company');
    showdropdown2.classList.add('drop-down-company2');

    document.getElementById('iddropdowncompany').classList.remove('img-drop-down-second');    
    iddropdowncompany.classList.add('img-drop-down-second2');
    
    document.getElementById('iddropupcompany').classList.remove('img-drop-up-second');
    iddropupcompany.classList.add('img-drop-up-second2');
}

function hideDropDown2(){

    document.getElementById('showdropdown2').classList.remove('drop-down-company2');
    showdropdown2.classList.add('drop-down-company');
    
    document.getElementById('iddropupcompany').classList.remove('img-drop-up-second2');
    iddropupcompany.classList.add('img-drop-up-second');
     
    document.getElementById('iddropdowncompany').classList.remove('img-drop-down-second2');    
    iddropdowncompany.classList.add('img-drop-down-second');
}

function procuraBackEnd(){
    alert('PROCURA-SE DEV BACK END :)')
}

function manipulandoDOM(){ 
    window.open("https://www.forbes.com/sites/theyec/2022/03/29/how-to-make-remote-working-work/?sh=48de64f9170b"); 
}