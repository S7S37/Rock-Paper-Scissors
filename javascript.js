const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')
const results = document.querySelector('.results')
let winner = 0 
let humanScore = 0 ;
let computerScore = 0;

rock.addEventListener("click", (e) => {
    
    playRround("rock",getComputerChoice())
    
    if(humanScore===computerScore === 5){
        results.innerHTML = `what a match you both tied`
    }
    else if(computerScore === 5 ){
        results.innerHTML = `hardluck, the computer has beaten you ${humanScore} to a ${computerScore}<br>
        scores has been reset ready to play again `
        humanScore = computerScore = 0 
    } 
    else if(humanScore === 5 ){
        results.innerHTML = `congratulations you beat the computer ${humanScore} to a ${computerScore}<br>
        scores has been reset ready to play again `
        humanScore = computerScore = 0
}})
paper.addEventListener("click", (e) => {
    
    playRround("paper",getComputerChoice())
    if(humanScore===computerScore === 5){
        results.innerHTML = `what a match you both tied`
    }
    else if(computerScore === 5 ){
        results.innerHTML = `hardluck, the computer has beaten you ${humanScore} to a ${computerScore}<br>
        scores has been reset ready to play again `
        humanScore = computerScore = 0 
    } 
    else if(humanScore === 5 ){
        results.innerHTML = `congratulations you beat the computer ${humanScore} to a ${computerScore}<br>
        scores has been reset ready to play again `
        humanScore = computerScore = 0
}
})
scissor.addEventListener("click", (e) => {
    
    playRround("scissors",getComputerChoice())
    if(humanScore===computerScore === 5){
        results.innerHTML = `what a match you both tied`
    }
    else if(computerScore === 5 ){
        results.innerHTML = `hardluck, the computer has beaten you ${computerScore} to a ${humanScore} <br>
        scores has been reset ready to play again `
        humanScore = computerScore = 0 
    } 
    else if(humanScore === 5 ){
        results.innerHTML = `congratulations you beat the computer ${humanScore} to a ${computerScore}<br>
        scores has been reset ready to play again `
        humanScore = computerScore = 0
}
})




//get input from user 
let getUserChoice = function(humanChoice = prompt("please enter your choice with the following \n 1 = rock  2 = paper  3 = sessiors ")) {
switch(humanChoice){
    case "1":
        return "rock"
    case "2":
        return "paper"
    case "3":
        return "scissors"
}
}

//get the computer choice
function getComputerChoice() {
let computerChoice = Math.random() ;
if (computerChoice <= 0.3333) return "rock" ;
else if (computerChoice <= 0.6666) return "paper" ;
else return "scissors" ;
}


//figure out the winner 


function playRround(humanChoice,computerChoice){
     
    if (humanChoice === "scissors") { 
       switch (computerChoice){
        case "rock":
            winner = 2;
            break;
        case "scissors" :
            winner =  0;
            break;
        case "paper":
            winner = 1;
       }
    }   
        
    else if(humanChoice === "rock") { 
       switch (computerChoice){
        case "rock":
            winner = 0;
            break;
        case "scissors" :
            winner =  1;
            break;
        case "paper":
            winner = 2;
       }
       
        
    }
    else if (humanChoice === "paper") { 
       switch (computerChoice){
        case "rock":
            winner = 1;
            break;
        case "scissors" :
            winner =  2;
            break;
        case "paper":
            winner = 0;
       }
    }   
    
    

    if (winner === 1) {
        humanScore++
        results.innerHTML = `You Won, you beat ${computerChoice}<br>
        your score is ${humanScore} computer score is ${computerScore}`
        
    } 
    else if ( winner === 0 ){
        results.innerHTML = `its a tie<br>
        your score is ${humanScore} computer score is ${computerScore} `
        
    }
    else {
        computerScore++
        results.innerHTML = `You lost, ${computerChoice}<br>
        your score is ${humanScore} computer score is ${computerScore}`
        
    }

}       

function playGame() {

    
    
    playRround(humanSelection,computerSelection)
    console.log(`your score is ${humanScore}\ncomputer score is ${computerScore}`)
}
