const dino = document.querySelector(".dino");

//função para pressionar a barra de espaço
function handleKeyUp(event) {
  if (event.keyCode === 32) {
    console.log("pressionou espaço!");
  }
}

document.addEventListener('keyup', handleKeyUp);
