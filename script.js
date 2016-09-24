document.addEventListener('DOMContentLoaded', init)

function init () {
  var gameBoard = [[], [], []]

  // Win Condition
  function winCondition (arr) {
    for (var i = 0; i < gameBoard.length; i++) {
      // Horizontal win condition
      if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
        console.log('u horizontal winna')
      }
      // Vertical win condition (Can potentially merge with above)
      if (gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
        console.log('u vertical winna')
      }
    }

    // Downward diagonal win condition
    if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
      console.log('u diagonal 1 winna')
    }
    // Upward diagonal win condition
    if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
      console.log('u diagonal 2 winna')
    }
  }

  // Pushing text of gamebox into gameboard array
  function createBoard() {
    for (var i = 0; i < 3; i++) {
      var gameContainer = document.querySelector('#gamebox-container' + (i + 1))
      for (var j = 0; j < 3; j++) {
        var gameBox = gameContainer.querySelector('div:nth-child(' + (j + 1) + ')')
        gameBoard[i][j] = gameBox.textContent
        gameBox.setAttribute('row', i)
        gameBox.setAttribute('col', j)
      }
    }
  }

  createBoard()

  function addGameBoxClick () {
    gameBox.addEventListener('click', playerMove)
  }

  function playerMove () {
    this.textContent = 'x'
  }

  // Next thing to do is to add a click event to each gameBox which will push a new text into the array at the correct position


}
