let computerElection, userElection, isWrongUserElection, userPoints, computerPoints, isUserWinner, isComputerWinner, isRoundForUser, isRoundForComputer;
userPoints = 0;
computerPoints = 0;
//isUserWinner = false;
isComputerWinner = false;
while(computerPoints<3 && userPoints<3){
    computerElection = Math.floor(Math.random()*(3-1+1)+1);
    if (computerElection == 1) computerElection = "piedra";
    if (computerElection == 2) computerElection = "papel";
    if (computerElection == 1) computerElection = "tijeras";
    do{
        userElection = prompt("Elige piedra, papel o tijeras: ");
        isWrongUserElection = userElection!=="piedra"&&userElection!=="papel"&&userElection!=="tijeras";
    }while(isWrongUserElection);
    isRoundForUser = (userElection == "piedra" && computerElection == "tijeras")||(userElection == "papel" && computerElection == "piedra")||(userElection == "tijeras" && computerElection == "papel");
    isRoundForComputer = (userElection == "piedra" && computerElection == "papel")||(userElection == "papel" && computerElection == "tijeras")||(userElection == "tijeras" && computerElection == "piedra");
    if(isRoundForUser) userPoints++;
    if(isRoundForComputer) computerPoints++;
    console.log(`Elegiste ${userElection} y el ordenador ${computerElection}. Tu puntuacion es de ${userPoints} y la del ordenador ${computerPoints}`);
};

//computerPoints==3? isComputerWinner=true : isUserWinner=true;

if(computerPoints==3) isComputerWinner = true;

//if(computerPoints==3) isComputerWinner = true;
//if(userPoints==3) isUserWinner = true;

isComputerWinner?console.log(`Has perdido`) : console.log(`Has ganado!!!`);

//Final

//if (isUserWinner) console.log(`Has ganado!!!`);
//if (isComputerWinner) console.log(`Has perdido`);
//if (isATie) console.log(`Empate!!!`);