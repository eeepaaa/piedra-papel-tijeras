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
	
// Mensajes 
let playerWin = "Has ganado esta ronda.";
let computerWin = "Has perdido esta ronda.";
let tie = "Has empatado."

// Jugadores 
let playerSelection;
let computerSelection;
	
		
// Juego 
function playRound() {

	let user = 0;
	let computer = 0;
	playerSelection = playerInput();
	computerSelection = computerPlay();

	if (playerSelection === "Tijeras" && computerSelection === "Papel") {
		user++;
		console.log("Tienes " + user + " puntos. " + playerWin + " Elegiste Tijeras y la computadora eligió Papel.");
	} else if (playerSelection === "Tijeras" && computerSelection === "Piedra") {
		computer++;
		console.log("La computadora tiene " + computer + " puntos. " + computerWin + " Elegiste Tijeras y la computadora eligió Piedra.");
	} else if (playerSelection === "Papel" && computerSelection === "Piedra") {
		user++;
		console.log("Tienes " + user + " puntos. " + playerWin + " Eligiste Papel y la computadora eligió Piedra.");
	} else if (playerSelection === "Papel" && computerSelection === "Tijeras") {
		computer++;
		console.log("La computadora tiene " + computer + " puntos. " + computerWin + " Elegiste Papel y la computadora eligió Tijeras.");
	} else if (playerSelection === "Piedra" && computerSelection === "Tijeras") {
		user++;
		console.log("Tienes " + user + " puntos. " + playerWin + " Elegiste Piedra y la computadora eligió Tijeras.");
	} else if (playerSelection === "Piedra" && computerSelection === "Papel") {
		computer++;
		console.log("La computadora tiene " + computer + " puntos. " + computerWin + " Eligiste Piedra y la computadora eligió Papel.");
	} else {
		console.log(tie + " Tú y la computadora eligieron lo mismo.");
	}


	// Repitición #2
	playerSelection = playerInput();
	computerSelection = computerPlay();

	if (playerSelection === "Tijeras" && computerSelection === "Papel") {
		user++;
		console.log("Tienes " + user + " puntos. " + playerWin + " Elegiste Tijeras y la computadora eligió Papel.");
	} else if (playerSelection === "Tijeras" && computerSelection === "Piedra") {
		computer++;
		console.log("La computadora tiene " + computer + " puntos. " + computerWin + " Elegiste Tijeras y la computadora eligió Piedra.");
	} else if (playerSelection === "Papel" && computerSelection === "Piedra") {
		user++;
		console.log("Tienes " + user + " puntos. " + playerWin + " Eligiste Papel y la computadora eligió Piedra.");
	} else if (playerSelection === "Papel" && computerSelection === "Tijeras") {
		computer++;
		console.log("La computadora tiene " + computer + " puntos. " + computerWin + " Elegiste Papel y la computadora eligió Tijeras.");
	} else if (playerSelection === "Piedra" && computerSelection === "Tijeras") {
		user++;
		console.log("Tienes " + user + " puntos. " + playerWin + " Elegiste Piedra y la computadora eligió Tijeras.");
	} else if (playerSelection === "Piedra" && computerSelection === "Papel") {
		computer++;
		console.log("La computadora tiene " + computer + " puntos. " + computerWin + " Eligiste Piedra y la computadora eligió Papel.");
	} else {
		console.log(tie + " Tú y la computadora eligieron lo mismo.");
	}

	// Repitición #3
	playerSelection = playerInput();
	computerSelection = computerPlay();

	if (playerSelection === "Tijeras" && computerSelection === "Papel") {
		user++;
		console.log("Tienes " + user + " puntos. " + playerWin + " Elegiste Tijeras y la computadora eligió Papel.");
	} else if (playerSelection === "Tijeras" && computerSelection === "Piedra") {
		computer++;
		console.log("La computadora tiene " + computer + " puntos. " + computerWin + " Elegiste Tijeras y la computadora eligió Piedra.");
	} else if (playerSelection === "Papel" && computerSelection === "Piedra") {
		user++;
		console.log("Tienes " + user + " puntos. " + playerWin + " Eligiste Papel y la computadora eligió Piedra.");
	} else if (playerSelection === "Papel" && computerSelection === "Tijeras") {
		computer++;
		console.log("La computadora tiene " + computer + " puntos. " + computerWin + " Elegiste Papel y la computadora eligió Tijeras.");
	} else if (playerSelection === "Piedra" && computerSelection === "Tijeras") {
		user++;
		console.log("Tienes " + user + " puntos. " + playerWin + " Elegiste Piedra y la computadora eligió Tijeras.");
	} else if (playerSelection === "Piedra" && computerSelection === "Papel") {
		computer++;
		console.log("La computadora tiene " + computer + " puntos. " + computerWin + " Eligiste Piedra y la computadora eligió Papel.");
	} else {
		console.log(tie + " Tú y la computadora eligieron lo mismo.");
	}

	// Repitición #4
	playerSelection = playerInput();
	computerSelection = computerPlay();

	if (playerSelection === "Tijeras" && computerSelection === "Papel") {
		user++;
		console.log("Tienes " + user + " puntos. " + playerWin + " Elegiste Tijeras y la computadora eligió Papel.");
	} else if (playerSelection === "Tijeras" && computerSelection === "Piedra") {
		computer++;
		console.log("La computadora tiene " + computer + " puntos. " + computerWin + " Elegiste Tijeras y la computadora eligió Piedra.");
	} else if (playerSelection === "Papel" && computerSelection === "Piedra") {
		user++;
		console.log("Tienes " + user + " puntos. " + playerWin + " Eligiste Papel y la computadora eligió Piedra.");
	} else if (playerSelection === "Papel" && computerSelection === "Tijeras") {
		computer++;
		console.log("La computadora tiene " + computer + " puntos. " + computerWin + " Elegiste Papel y la computadora eligió Tijeras.");
	} else if (playerSelection === "Piedra" && computerSelection === "Tijeras") {
		user++;
		console.log("Tienes " + user + " puntos. " + playerWin + " Elegiste Piedra y la computadora eligió Tijeras.");
	} else if (playerSelection === "Piedra" && computerSelection === "Papel") {
		computer++;
		console.log("La computadora tiene " + computer + " puntos. " + computerWin + " Eligiste Piedra y la computadora eligió Papel.");
	} else {
		console.log(tie + " Tú y la computadora eligieron lo mismo.");
	}

	// Repitición #5
	playerSelection = playerInput();
	computerSelection = computerPlay();

	if (playerSelection === "Tijeras" && computerSelection === "Papel") {
		user++;
		console.log("Tienes " + user + " puntos. " + playerWin + " Elegiste Tijeras y la computadora eligió Papel.");
	} else if (playerSelection === "Tijeras" && computerSelection === "Piedra") {
		computer++;
		console.log("La computadora tiene " + computer + " puntos. " + computerWin + " Elegiste Tijeras y la computadora eligió Piedra.");
	} else if (playerSelection === "Papel" && computerSelection === "Piedra") {
		user++;
		console.log("Tienes " + user + " puntos. " + playerWin + " Eligiste Papel y la computadora eligió Piedra.");
	} else if (playerSelection === "Papel" && computerSelection === "Tijeras") {
		computer++;
		console.log("La computadora tiene " + computer + " puntos. " + computerWin + " Elegiste Papel y la computadora eligió Tijeras.");
	} else if (playerSelection === "Piedra" && computerSelection === "Tijeras") {
		user++;
		console.log("Tienes " + user + " puntos. " + playerWin + " Elegiste Piedra y la computadora eligió Tijeras.");
	} else if (playerSelection === "Piedra" && computerSelection === "Papel") {
		computer++;
		console.log("La computadora tiene " + computer + " puntos. " + computerWin + " Eligiste Piedra y la computadora eligió Papel.");
	} else {
		console.log(tie + " Tú y la computadora eligieron lo mismo.");
	}
	
	if (user === computer) {
		console.log("Tú y la computadora han empatado.")
	} else if (user < computer) {
		console.log("Ha ganado la computadora.")
	} else {
		console.log("¡Has ganado!")
	}
}
