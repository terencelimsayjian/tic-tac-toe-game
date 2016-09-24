document.addEventListener('DOMContentLoaded', init)

function init () {
  var gameBoard = [[], [], []]
  var player = 'X'
  var xWins = 0
  var yWins = 0
  var xWinsSpan = document.querySelector('#player-x-score')
  var yWinsSpan = document.querySelector('#player-y-score')
  var button = document.querySelector('button')
  button.addEventListener('click', globalReset)

  // Win Condition
  function winCondition (arr) {
    for (var i = 0; i < gameBoard.length; i++) {
      // Horizontal win condition
      if (gameBoard[i][0] === player && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
        addScore()
        resetGameBoard()
        alert('Player ' + player + ' wins this round!')
      }
      // Vertical win condition (Can potentially merge with above)
      if (gameBoard[0][i] === player && gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
        addScore()
        resetGameBoard()
        alert('Player ' + player + ' wins this round!')
      }
    }

    // Downward diagonal win condition
    if (gameBoard[0][0] === player && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
      addScore()
      resetGameBoard()
      alert('Player ' + player + ' wins this round!')
    }
    // Upward diagonal win condition
    if (gameBoard[0][2] === player && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
      addScore()
      resetGameBoard()
      alert('Player ' + player + ' wins this round!')
    }
  }

  // Pushing text of gamebox into gameboard array
  function updateBoard () {
    for (var i = 0; i < 3; i++) {
      var gameContainer = document.querySelector('#gamebox-container' + (i + 1))
      for (var j = 0; j < 3; j++) {
        var gameBox = gameContainer.querySelector('div:nth-child(' + (j + 1) + ')')
        gameBoard[i][j] = gameBox.textContent
      }
    }
  }

  updateBoard()

// Assign attributes row and col, and add click event listener to gameboxes
  function addAttrAndClick () {
    for (var i = 0; i < 3; i++) {
      var gameContainer = document.querySelector('#gamebox-container' + (i + 1))
      for (var j = 0; j < 3; j++) {
        var gameBox = gameContainer.querySelector('div:nth-child(' + (j + 1) + ')')
        gameBox.setAttribute('row', i)
        gameBox.setAttribute('col', j)
        gameBox.addEventListener('click', playerMove)
      }
    }
  }

  addAttrAndClick()

  // Tally score after a player has won
  function addScore () {
    if (player === 'X') {
      xWins += 1
      xWinsSpan.textContent = xWins
    } else if (player === 'O') {
      yWins += 1
      yWinsSpan.textContent = yWins
    }
  }

  // Dictates behaviour when gamebox is clicked
  function playerMove () {
    if (this.textContent === '') {
      if (player === 'X') {
        this.textContent = 'X'
        updateBoard()
        winCondition()
        player = 'O'
      } else {
        this.textContent = 'O'
        updateBoard()
        winCondition()
        player = 'X'
      }
      var playerTurn = document.querySelector('h2')
      playerTurn.textContent = ("Player " + player + "'s turn")
    }
  }

  function resetGameBoard () {
    for (var i = 0; i < 3; i++) {
      var gameContainer = document.querySelector('#gamebox-container' + (i + 1))
      for (var j = 0; j < 3; j++) {
        var gameBox = gameContainer.querySelector('div:nth-child(' + (j + 1) + ')')
        gameBox.textContent = ''
      }
    }
    updateBoard()
  }

  function globalReset () {
    xWins = 0
    yWins = 0
    xWinsSpan.textContent = xWins
    yWinsSpan.textContent = yWins
  }

}