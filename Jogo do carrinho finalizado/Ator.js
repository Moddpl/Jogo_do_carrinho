//variaveis Do Ator
let xAtor = 90;
let yAtor = 366;
let colisao = false;
let meusPontos = 0


function mostrarAtor (){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentoAtor(){ 
 if (keyIsDown(UP_ARROW)){
   yAtor -= 2;
 }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 2;
    }
  }
   if (keyIsDown(LEFT_ARROW)){
     xAtor -= 2;
   }
    if (keyIsDown(RIGHT_ARROW)){
      xAtor += 2;
    }
}


function colidiu(){
  yAtor = 366;
}


function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
  colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      colidiu();
      somColidiu.play();
      if(meusPontos > 0){
        meusPontos--
        somColidiu.play();
      }
    }
  }
}

function incluirPontos(){
  textAlign(CENTER);
    textSize(30);
    fill(color(255, 215, 60));
    text(meusPontos, width / 5, 27);
}

function marcarPonto(){
    if (yAtor < 4){
      meusPontos++
      yAtor = 366;
      somPontos.play();
    }
}

function podeSeMover() {
  return (yAtor < 366);
}