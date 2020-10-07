const dino = document.querySelector(".dino");
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

document.addEventListener('keyup', handleKeyUp);
