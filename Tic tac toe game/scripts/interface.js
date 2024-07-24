document.addEventListener('DOMContentLoaded', () => {

  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener('click',handleClick);
  })

  let closeButton = document.querySelector(".close-button");

  closeButton.addEventListener('click', () => {
    let setOverlay = document.querySelector(".overlay-off");
    setOverlay.style.visibility = "hidden";

    resetGame();
    clearSquares();
  })
})

function handleClick(event){

  let square = event.target;
  let position = square.id;

  if(handleMove(position)){

    uptadeSquare(position);
    let setOverlay = document.querySelector(".overlay-off");
    setOverlay.style.visibility = "visible";

  }
  uptadeSquare(position);
}

function uptadeSquare(position){
  let square = document.getElementById(position.toString());
  let noughtCross = board[position];
  if(noughtCross == 'o'){
    square.innerHTML = '<img class="nought-img" src="nought.svg">';
  } else if(noughtCross == 'x'){
    square.innerHTML = '<img class="cross-img" src="cross.svg">';
  }
}

function resetGame(){
  board = ['','','','','','','','','',];
  playerTime = 0;
  gameOver = false;
}

function clearSquares(){
  
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.innerHTML = '';
  })
}


