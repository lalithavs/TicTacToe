let player1Turn = true;
let cellsGrid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
let winner = 0;
let moveCounter = 0;

function selectCell(element) {
    let selectedCell = element.id;
    let positionX = parseInt(selectedCell.charAt(4));
    let positionY = parseInt(selectedCell.charAt(5));

    if (element.innerHTML !== '') return;
    if (winner != 0) return;
    if (player1Turn) {
        cellsGrid[positionX][positionY] = 1;
        element.innerHTML = 'X';
        document.getElementById('message').innerHTML = "Player 2's turn";
    } else {
        cellsGrid[positionX][positionY] = 2;
        element.innerHTML = 'O';
        document.getElementById('message').innerHTML = "Player 1's turn";
    }
    moveCounter++;
    player1Turn = !player1Turn;

    if (moveCounter >= 5) {
        if (moveCounter % 2 != 0) checkWinner(1);
        else checkWinner(2);
        if (moveCounter == 9 && winner == 0) {
            document.getElementById('message').innerHTML = "It's a draw!";
        }
    }
}

function checkWinner(player) {
    // Check rows
    if (
        cellsGrid[0][0] === player &&
        cellsGrid[0][1] === player &&
        cellsGrid[0][2] === player
    )
        winner = player;
    else if (
        cellsGrid[1][0] === player &&
        cellsGrid[1][1] === player &&
        cellsGrid[1][2] === player
    )
        winner = player;
    else if (
        cellsGrid[2][0] === player &&
        cellsGrid[2][1] === player &&
        cellsGrid[2][2] === player
    )
        winner = player;
    // Check columns
    else if (
        cellsGrid[0][0] === player &&
        cellsGrid[1][0] === player &&
        cellsGrid[2][0] === player
    )
        winner = player;
    else if (
        cellsGrid[0][1] === player &&
        cellsGrid[1][1] === player &&
        cellsGrid[2][1] === player
    )
        winner = player;
    else if (
        cellsGrid[0][2] === player &&
        cellsGrid[1][2] === player &&
        cellsGrid[2][2] === player
    )
        winner = player;
    // Check diagonals
    else if (
        cellsGrid[0][0] === player &&
        cellsGrid[1][1] === player &&
        cellsGrid[2][2] === player
    )
        winner = player;
    else if (
        cellsGrid[0][2] === player &&
        cellsGrid[1][1] === player &&
        cellsGrid[2][0] === player
    )
        winner = player;
    if (winner != 0) {
        document.getElementById('message').innerHTML = `Player ${winner} won!`;
    }
}

function restart() {
    player1Turn = true;
    cellsGrid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    winner = 0;
    moveCounter = 0;
    document.getElementById('message').innerHTML = "Player 1's turn";
    for (let i = 0; i < 9; i++)
        document.getElementsByClassName('column')[i].innerHTML = '';
}
