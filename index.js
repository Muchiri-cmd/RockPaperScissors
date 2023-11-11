"use strict";

const playerScore=0;
const computerScore=0;
const playerScore_Span=document.getElementById("user-score");
const computerScore_Span=document.getElementById("computer-score"); 
const ccoreBoard_div=document.querySelector(".scoreboard");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissors_div=document.getElementById("scissors");

rock_div.addEventListener("click",()=>{
    console.log("You clicked on rock");
})