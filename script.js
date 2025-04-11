let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("reset-btn");
let newGame = document.getElementById("newGame-btn");
let gif = document.getElementById("gift");
let game = document.getElementById("gamerS");
let turn = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn){
            box.innerText = "O";
            turn = false;
        } else{
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
        });
});

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
    const gifts = () => {
            const btn = "NEW GAME";
            newGame.innerText = btn;
            newGame.style.display = 'inline-block';
            newGame.classList.add("new-game-btn-ad");
            const msg = `Winner = ${pos1}`;
            gif.innerText = msg;   
            gif.classList.add("gift-msg");
            game.style.display = "none";
            resetbtn.style.display = "none";  
        };
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                stop();
                gifts();
            };
        };
    };
};

const stop = () => {
    for(let box of boxes){
        box.disabled = true;
    };
};

const start = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};

const resetGame = () => {
    turn = true;
    start();
};

const ngBtn = () => {
    gif.classList.remove("gift-msg");
    game.style.display = "flex";
    gif.innerText = "";
    turn = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        newGame.style.display = "none";
        newGame.classList.remove("nB");
        resetbtn.style.display = "block"; 
    };
};

resetbtn.addEventListener("click", resetGame);
newGame.addEventListener("click", ngBtn);