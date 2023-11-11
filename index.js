"use strict";

let playerScore=0;
let computerScore=0;
const playerScore_Span=document.getElementById("user-score");
const computerScore_Span=document.getElementById("computer-score"); 
const scoreBoard_div=document.querySelector(".scoreboard");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissors_div=document.getElementById("scissors");

function getComputerChoice(){
    const choices=['rock','paper','scissors'];
    let randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber]; 
}
function win(playerChoice,computerChoice){
    playerScore++;
    playerScore_Span.textContent=playerScore;
    computerScore_Span.textContent=computerScore;
    result_p.textContent=`[Player:${playerChoice}] beats [Computer:${computerChoice}]. You win!!! `
    document.getElementById(playerChoice).classList.add("green-color");
    setTimeout(()=>{document.getElementById(playerChoice).classList.remove("green-color")},500)
}

function lose(playerChoice,computerChoice){
    computerScore++;
    playerScore_Span.textContent=playerScore;
    computerScore_Span.textContent=computerScore;
    result_p.textContent=`[Player:${playerChoice}] looses to [Computer:${computerChoice}]. You Loose!!! `
    document.getElementById(playerChoice).classList.add("red-color");
    setTimeout(()=>{document.getElementById(playerChoice).classList.remove("red-color")},500)
}
function draw(playerChoice,computerChoice){
    result_p.textContent=`[Player:${playerChoice}] draws [Computer:${computerChoice}]. Its a draw!!! `
    document.getElementById(playerChoice).classList.add("grey-color");
    setTimeout(()=>{document.getElementById(playerChoice).classList.remove("grey-color")},500)
}
function game(playerChoice){
    //console.log(`$playerChoice`);
    const computerChoice=getComputerChoice();
    //cover all cases   
    switch (playerChoice+computerChoice){
        //user wins
        case "paperrock":
        case "scissorspaper":
        case "rockscissors":
           win(playerChoice,computerChoice);
           break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(playerChoice,computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(playerChoice,computerChoice);
            break;
    }
}

//main function
function main(){
    rock_div.addEventListener("click",()=>{
        game("rock");
    })
    paper_div.addEventListener("click",()=>{
        game("paper");
    })
    scissors_div.addEventListener("click",()=>{
        game("scissors");
    })
}

main();
