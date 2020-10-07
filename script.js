const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let isJumping = false;

//função para pressionar a barra de espaço
function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

//função para o dino pular
function jump() {
  let position = 0;

  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);

      //Descendo
      let downInterval = setInterval(() => {
        if (position < 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 20;
          dino.style.bottom = position + 'px';
        }
      }, 20);
    } else {
      //Subindo
      position += 20;
      dino.style.bottom = position + 'px';
    }
  }, 20);
}

//função para criar cactos
function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;

  cactus.classList.add('cactus');
  cactus.style.left = 1000 + 'px';
  background.appendChild(cactus);

  //movimentar o cactus para esquerda
  let leftInterval = setInterval(() => {
    //remover o cactus 
    if (cactusPosition < -60) {
      clearInterval(leftInterval);
      background.removeChild(cactus);
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }
  }, 20);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);
