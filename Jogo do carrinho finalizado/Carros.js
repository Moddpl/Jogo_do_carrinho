//Lista
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeDosCarros = [2, 3, 2.5, 5, 3.3, 2.3];
let xCarros = [600, 600, 600,600, 600, 600];

//Variavel geral
let larguraCarro = 60;
let alturaCarro = 40;
let xposicaoInicialCarros = 600;



function mostrarCarro(){
  for (let i = 0; i < imagemCarros.length; i++ ) {
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
  }
}


function movimentoCarro() {
  for(let i = 0; i < imagemCarros.length; i++)
  xCarros [i] -= velocidadeDosCarros[i];
}

function voltaPosicaoInicialCarro() { 
  for (let i = 0; i < imagemCarros.length; i++) 
  if(passouATela(xCarros[i])){
    xCarros[i] = xposicaoInicialCarros;
   }
  }


function passouATela(xCarros) {
  
  return xCarros < -55
}