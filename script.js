// Declaration of variables and functions 
const picks = ['Piedra', 'Papel', 'Tijeras']; 
const userWin = '¡Bien! Has ganado esta ronda.';
const computerWin = 'Has perdido esta ronda.';
const tieRound = 'Tú y la computadora han elegido lo mismo.'
const log = document.getElementById('log');
const msg = document.getElementById('msg');
const userScore = document.getElementById('userScore');
const computerScore = document.getElementById('computerScore');
const playerPick = document.getElementById('picks');
const gameStep = document.getElementById('gameStep');
const playBtn = document.getElementById('playBtn');
const resetBtn = document.getElementById('resetBtn');
const rounds = document.getElementById('roundsPick');
const rondas = document.getElementById('ronda');
let roundsPicked = rounds.value;
let roundsCheck = parseInt(roundsPicked, 10);
let ronda = parseInt(rondas.textContent, 10);
let userPoints = 0;
let computerPoints = 0;

// Restarts the game
function restart() {
	msg.innerHTML = '';
	gameStep.textContent = 'presiona \'jugar\' para comenzar'; 
	userPoints = 0;
	computerPoints = 0;
	console.log('Displayed data has been reset.');
	userScore.textContent = 0;
	computerScore.textContent = 0;
	rondas.textContent = 0;
	ronda = 0;
	roundsPicked = rounds.value;
	roundsCheck = parseInt(roundsPicked, 10);
}

resetBtn.addEventListener('click', restart);

// Sets the player's name
function setPlayer() {
	const player = document.getElementById('nombre').value;
	document.getElementById('playerName').textContent = player + ' ';
	console.log('Player\'s name\'s been set');
}

// Lets computer make a selection
function computerTurn() {
	let computerPick = picks[Math.floor(Math.random() * picks.length)];
	computerPick = computerPick.toString();
	return computerPick;
}

// Game rules 
function game(choice) {
	
	computerPick = computerTurn();

	if ((choice == 'Tijeras' && computerPick == 'Papel') || (choice == 'Papel' && computerPick == 'Piedra') || (choice == 'Piedra' && computerPick == 'Tijeras')) {
		gameStep.textContent = '¡GANASTE ESTA RONDA!';
		userPoints++;
		userScore.textContent = userPoints;
	} else if ((computerPick == 'Tijeras' && choice == 'Papel') || (computerPick == 'Papel' && choice == 'Piedra') || (computerPick == 'Piedra' && choice == 'Tijeras')) {
		gameStep.textContent = '¡PERDISTE ESTA RONDA!';
		computerPoints++;
		computerScore.textContent = computerPoints;
	} else {
		gameStep.textContent = '¡EMPATE ENTRE LA COMPUTADORA Y TÚ!'
	}
	msg.innerHTML += ronda + 1 + 'º: Elegiste \'' + choice + '\' y la computadora eligió \'' + computerPick + '\'.<br>';
	console.log('You picked: \'' + choice + '\' and the computer picked: \'' + computerPick + '\'.');
	ronda++;
	document.getElementById('ronda').textContent = ronda;
	if (ronda == roundsCheck) {
		winner();
	}
	log.scrollTop = log.scrollTopMax;
}

// Checks for a winner 
function winner() {
	if (userPoints > computerPoints) {
		gameStep.textContent = '¡GANASTE ESTA RONDA Y LA PARTIDA!';
		msg.innerHTML += '<br>*** ¡FELICITACIONES, GANASTE LA PARTIDA! ***<br>';
	} else if (userPoints < computerPoints) {
		gameStep.textContent = 'PERDISTE ESTA RONDA Y LA PARTIDA';
		msg.innerHTML += '<br>*** ¡QUÉ MAL! PERDISTE LA PARTIDA. ***<br>'
	} else {
		gameStep.textContent = 'EMPATE. ¿OTRA PARTIDA?';
		msg.innerHTML += '<br>*** ¡EMPATE! ¿OTRA RONDA?***<br>'
	}

	msg.innerHTML += '<br>HAZ CLICK EN EL BOTÓN \'JUGAR\' PARA JUGAR DE NUEVO.<br>';

}

// Adds an event to trigger a round to be played
for(let i = 0; i < playerPick.children.length; i++ ) {
	playerPick.children[i].onclick = function() {
	choice = picks[i];
	console.log('You\'ve selected ' + choice + ' and round #' + (ronda + 1) + ' has begun.');
	game(choice);
	};
}

// Disables picks until game starts
for(let i = 0; i < playerPick.children.length; i++) {
	playerPick.children[i].disabled = true;
	console.log('Button ' + picks[i] + ' has been disabled.');
}

// Sets game to start upon pressing the button
playBtn.addEventListener('click', function() {
	for(let i = 0; i < playerPick.children.length; i++) {
			playerPick.children[i].disabled = false;
			console.log('Button ' +  picks[i] + ' has been enabled.')
	}
	restart();	
	console.log(roundsPicked + ' rounds have been selected');
	gameStep.textContent = '¿QUÉ ELIGES?';
	setPlayer();
}); 
