var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        alert("The result is a tie")
    } 
    
    else if(choice1 === "rock") {        
        if(choice2 === "scissors") {
            alert("rock wins")
        } else {
           alert("peper wins")
            }}
            
            else if(choice1 === "paper"){
                if(choice2 === "rock") {
                    alert("peper wins")
                    } else {
                       alert("scissors wins")
                        }}
                        
                else if(choce1 === "scissors") {
                    if(choice2 === "rock") {
                        alert("rock wins")
                        } else {
                            alert("peper wins")
                        }}                    
};

console.log(compare(computerChoice, userChoice))