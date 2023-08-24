//This function is to check when the game is won

function checkIfGameIsWon (first, second, third){
    if(condition.textContent.includes("won the game")){
        return;
    }
    if(
        buttons[first].textContent === "X" &&
        buttons[second].textContent === "X" &&
        buttons[third].textContent ==="X"
    ){
        disablebuttonsWhenGameIsWon("Player 1");
        return;
    } else if (
        buttons[first].textContent === "O" &&
        buttons[second].textContent === "O" &&
        buttons[third].textContent === "O" 
    ){
    disablebuttonsWhenGameIsWon("Player 2");
    return;
    } else {
         checkDraw();
    }

}

function checkStatus (){
    //Check if the game is won horizontally
    checkIfGameIsWon(0, 1, 2);
    checkIfGameIsWon(3, 4, 5);
    checkIfGameIsWon(6, 7, 8);
    //check if the game is won vertically
    checkIfGameIsWon(0, 3, 6);
    checkIfGameIsWon(1, 4, 7);
    checkIfGameIsWon(2, 5, 8);
    // check if the game has been won diagonally
    checkIfGameIsWon(0, 4, 8);
    checkIfGameIsWon(2, 4, 6);
}


function disablebuttonsWhenGameIsWon(player){
    for(let button of buttons){
        if (button.textContent === ""){
            button.toggleAttribute("disabled");
        }
    }condition.textContent = player + " won the game";
}

function checkDraw (){
    for (let button of buttons){
        if (button.textContent === ""){
            return;
        }
    }
    condition.textContent = " This is a Draw Game!";
}