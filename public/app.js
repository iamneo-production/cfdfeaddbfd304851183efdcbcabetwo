// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (btn, index) => {
    if(btn.value===''&&! checkWinner()){
        cells[index]=currentPlayer;
        btn.value=currentPlayer;
    btn.classList.add(currentPlayer);
    currentPlayer=currentPlayer==='X'?'O':'X';
    updateResult();
    checkWinner();
    }
};
function checkWinner(){
    for(let condition of conditions){
        const[a,b,c]=condition;
        if(cells[a] && cells[a]=== cells[b] && cells[a] === cells[c]){
            result.innerHTML=  `Player $ {cells[a]} wins!`;
            enableResetButton();
            return true;
        }
    }
    if(!cells.includes('')){
        result.innerHTML="It's a draw!";
        enableResetButton();
        return true;
    }
    return false;
}

function updateResult(){
    document.getElementById('current-player').innerHTML=currentPlayer;
}
function enableResetButton(){
    document.getElementById('reset').disabled=false;
}
function resetGame(){
    cells=['','']
}

    
btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
