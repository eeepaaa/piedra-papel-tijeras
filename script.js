let choices = ["Piedra", "Papel", "Tijeras"];

// Juega el AI
function computerPlay() {
	AiPicks = choices[Math.floor(Math.random() * choices.length)];
	AiPicked = AiPicks.toString();
	return AiPicked;
}	

// Input de la persona
function playerInput() {
	let answer = prompt("Ingresa una de las siguientes opciones: Piedra, Papel o Tijeras.");
	input = answer.toString();
	inputUpper = answer.toUpperCase();
	firstLetterUpper = inputUpper.substr(0, 1);
	rest = input.toLowerCase();
	restLower = rest.substr(1);
	finalInput = firstLetterUpper + restLower;
	return finalInput;
} 
	
// Mensajes del juego
let playerWins = "Tú ganaste esta ronda";
let computerWins = "La computadora ganó esta ronda";
let tie = "Empate"
	
// Supuestos valores. Recuerda anularlos luego
let playerSelection = playerInput();
let computerSelection = computerPlay();
	
		
// Reglas del juego
function playRound() {
	if (playerSelection === "Tijeras" && computerSelection === "Papel") {
		return playerWins;
	} else if (playerSelection === "Tijeras" && computerSelection === "Piedra") {
		return computerWins;
	} else if (playerSelection === "Papel" && computerSelection === "Piedra") {
		return playerWins;
	} else if (playerSelection === "Papel" && computerSelection === "Tijeras") {
		return computerWins;
	} else if (playerSelection === "Piedra" && computerSelecion === "Tijeras") {
		return playerWins;
	} else if (playerSelection === "Piedra" && computerSelecion === "Papel") {
		return computerWins;
	} else {
		return tie;
	}
}

// Juego en sí

