

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


   
let humanSelection = getUserChoice()
let computerSelection = getComputerChoice()
function playGame() {
    let winner = 0 
    let humanScore = 0 ;
    let computerScore = 0;
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
    console.log(winner)
    

    if (winner === 1) {
        humanScore++
        console.log(`You Won, you beat ${computerChoice} `)
    } 
    else if ( winner === 0 ){
        console.log('its a tie ')
    }
    else {
        computerScore++
        console.log(`You lost, ${computerChoice}`)
    }

}    
    playRround(humanSelection,computerSelection)
    console.log(`your score is ${humanScore}\ncomputer score is ${computerScore}`)
    humanSelection = getUserChoice()
    computerSelection = getComputerChoice()    
    playRround(humanSelection,computerSelection)
    console.log(`your score is ${humanScore}\ncomputer score is ${computerScore}`)
    humanSelection = getUserChoice()
    computerSelection = getComputerChoice()
    playRround(humanSelection,computerSelection)
    console.log(`your score is ${humanScore}\ncomputer score is ${computerScore}`)
    humanSelection = getUserChoice()
    computerSelection = getComputerChoice()   
    playRround(humanSelection,computerSelection)
    console.log(`your score is ${humanScore}\ncomputer score is ${computerScore}`)
    humanSelection = getUserChoice()
    computerSelection = getComputerChoice()
    playRround(humanSelection,computerSelection)
    console.log(`your score is ${humanScore}\ncomputer score is ${computerScore}`)}

playGame()
