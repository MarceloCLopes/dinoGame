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

  cactus.classList.add('cactus');
}

document.addEventListener('keyup', handleKeyUp);
