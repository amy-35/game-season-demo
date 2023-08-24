let lastValue = "O";
let condition = document.getElementById("condition");
condition.textContent = "Player 1's turn to play";

let buttons = document.querySelectorAll(".box");
for (let button of buttons) {
    button.addEventListener("click", () => {
        if (button.textContent !== ""){
            return;
        }
        if (lastValue === "O"){
            button.textContent = "X";
            lastValue = "X";
            condition.textContent = "Player 2's turn to play";
            checkStatus();
        }
        else{
            button.textContent = "O";
            lastValue = "O";
            condition.textContent = "Player 1's turn to play";
            checkStatus();
        }
    });
}

let control = document.getElementById("controlbutton")

control.addEventListener("click", () => {
    window.location.href = "index.html";
});
