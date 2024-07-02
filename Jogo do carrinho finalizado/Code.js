function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostrarAtor();
  mostrarCarro();
  movimentoCarro();
  movimentoAtor();
  voltaPosicaoInicialCarro();
  verificaColisao();
  incluirPontos();
  marcarPonto();
}


