/*function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
document.querySelectorAll('.tecla')

document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;

function tocaSomTim () {
    document.querySelector('#som_tecla_tim').play();
}
document.querySelector('.tecla_tim').onclick = tocaSomTim;

function tocaSomPuff () {
    document.querySelector('#som_tecla_puff').play();
}
document.querySelector('.tecla_puff').onclick = tocaSomPuff;

function tocaSomSplash () {
    document.querySelector('#som_tecla_splash').play();
}
document.querySelector('.tecla_splash').onclick = tocaSomSplash;

function tocaSomToim () {
    document.querySelector('#som_tecla_toim').play();
}
document.querySelector('.tecla_toim').onclick = tocaSomToim;

function tocaSomPsh () {
    document.querySelector('#som_tecla_psh').play();
}
document.querySelector('.tecla_psh').onclick = tocaSomPsh;

function tocaSomTic () {
    document.querySelector('#som_tecla_tic').play();
}
document.querySelector('.tecla_tic').onclick = tocaSomTic;

function tocaSomTom () {
    document.querySelector('#som_tecla_tom').play();
}
document.querySelector('.tecla_tom').onclick = tocaSomTom; 
*/


 function tocaSom (seletorElemento) {
    const elemento = document.querySelector(seletorElemento);

     if(elemento && elemento.localName ==='audio'){
        elemento.play();}
     
        else  {
         //alert elementoou seletor nao encontrado);
         console.log('elemento ou seletor não encontrado')
        }
    }
    const listaDeTeclas = document.querySelectorAll ('.tecla');
    //para
    for (let contador = 0; contador < listaDeTeclas.length; contador++);{

    const tecla = listaDeTeclas[contador];
    const instrument = tecla.classList[1];
    const idAudio = '#som_$(instrumento)'; // template string

    tecla.onclick = function (){
     tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'enter'|| evento.code==='space'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}


  /*function tocaSom (idElementoAudio){
        document.querySelector(idElementoAudio).play();
       }

      const listaDeTeclas = document.querySelectorAll('.tecla');

      for (let contador = 0; contador <listaDeTeclas.length; contador++){
         const tecla = listaDeTeclas[contador];
         const instrumento = tecla.classList[1];
         const idAudio = '#som_$(instrumento)';

            tecla.onclick = function (){
                tocaSom(idAudio);
            }
         }
*/