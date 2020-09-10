const picks = ['Piedra', 'Papel', 'Tijeras'];
const userWin = '¡Bien! Has ganado esta ronda.';
const computerWin = 'Has perdido esta ronda.';
const tieRound = 'Tú y la computadora eligieron lo mismo así que han empatado esta ronda.';
const mensajeOutput = document.getElementById('mensaje');
const userScore = document.getElementById('userScore');
const computerScore = document.getElementById('computerScore');
let rounds = document.getElementById('roundsPick').value;
let userPicks;
let computerPicks;
let playerPicks = document.getElementById('prueba');
let playerSelect;

//No entiendo de dónde salió esto
for(let i = 0; i < playerPicks.children.length; i++) {
	(function(index){
		playerPicks.children[i].onclick = function(){
			playerSelect = picks[i];
		}
	})(i);
}

function reiniciar() {
	document.getElementById('ronda').textContent = '0';
	document.getElementById('mensaje').innerHTML = '';
	document.getElementById('do').textContent = "presiona 'jugar' para comenzar";
}

function setJugador(){
 	const jugador = document.getElementById('nombre').value;
	document.getElementById('playerName').textContent = jugador + ' ';	
}

function computerTurn() {
	let computerPick = picks[Math.floor(Math.random() * picks.length)];
	computerPick = computerPick.toString();
	return computerPick;
}

function userPick() {
	let pick = prompt('Declara tu elección', '¿Piedra, Papel o Tijeras?')
	let input = pick.toString().toUpperCase().substr(0, 1);
	let rest = pick.toString().toLowerCase().substr(1);
	const finalPick = input + rest;
	return finalPick;
}

function messageUpdate (){
	document.getElementById('do').textContent = '¿qué eliges?'
}

function juego() {

	let userPoints = 0;
	let computerPoints = 0;
	let i = 0;
	const rounds = document.getElementById('roundsPick').value;
	reiniciar();
	setJugador();
	messageUpdate();

	do {
		userPicks = userPick();
		computerPicks = computerTurn();

		if (playerSelect === 'Tijeras' && computerPicks === 'Papel') {
			userPoints++;
			console.log(userWin + ' Has sumado 1 punto.');
			document.getElementById('ronda').textContent = [i + 1];
			document.getElementById('do').textContent = '¡GANASTE ESTA RONDA!';
			mensajeOutput.innerHTML = [i + 1] + 'º: ' + userWin + ' Has sumado 1 punto.<br>' + document.getElementById('mensaje').innerHTML;
			userScore.innerHTML = userPoints;
			computerScore.innerHTML = computerPoints;
		} else if (playerSelect=== 'Tijeras' && computerPicks === 'Piedra') {
			computerPoints++;
			console.log(computerWin + ' La computadora ha sumado 1 punto.');
			document.getElementById('ronda').textContent = [i + 1];
			document.getElementById('do').textContent = 'PERDISTE ESTA RONDA';
			mensajeOutput.innerHTML = [i + 1] + 'º: ' + computerWin + ' La computadora ha sumado 1 punto.<br>' + document.getElementById('mensaje').innerHTML;
			userScore.innerHTML = userPoints;
			computerScore.innerHTML = computerPoints;
		}  else if (playerSelect === 'Papel' && computerPicks === 'Piedra') {
			userPoints++;
			console.log(userWin + ' Has sumado 1 punto.');
			document.getElementById('ronda').textContent = [i + 1];
			document.getElementById('do').textContent = '¡GANASTE ESTA RONDA!';
			mensajeOutput.innerHTML = [i + 1] + 'º: ' + userWin + ' Has sumado 1 punto.<br>' + document.getElementById('mensaje').innerHTML;
			userScore.innerHTML = userPoints;
			computerScore.innerHTML = computerPoints;
		} else if (playerSelect === 'Papel' && computerPicks === 'Tijeras') {
			computerPoints++;
			console.log(computerWin + ' La computadora ha sumado 1 punto.');
			document.getElementById('ronda').textContent = [i + 1];
			document.getElementById('do').textContent = 'PERDISTE ESTA RONDA';
			mensajeOutput.innerHTML = [i + 1] + 'º: ' + computerWin + ' La computadora ha sumado 1 punto.<br>' + document.getElementById('mensaje').innerHTML;
			userScore.innerHTML = userPoints;
			computerScore.innerHTML = computerPoints;
		} else if (playerSelect === 'Piedra' && computerPicks === 'Tijeras') {
			userPoints++;
			console.log(userWin + ' Has sumado 1 punto.' );
			document.getElementById('ronda').textContent = [i + 1];
			document.getElementById('do').textContent = '¡GANASTE ESTA RONDA!';
			mensajeOutput.innerHTML = [i + 1] + 'º: ' + userWin + ' Has sumado 1 punto.<br>' + document.getElementById('mensaje').innerHTML;
			userScore.innerHTML = userPoints;
			computerScore.innerHTML = computerPoints;	
		} else if (playerSelect === 'Piedra' && computerPicks === 'Papel') {
			computerPoints++;
			console.log(computerWin + ' La computadora ha sumado 1 punto.');
			document.getElementById('ronda').textContent = [i + 1];
			document.getElementById('do').textContent = 'PERDISTE ESTA RONDA';
			mensajeOutput.innerHTML = [i + 1] + 'º: ' + computerWin + ' La computadora ha sumado 1 punto.<br>' + document.getElementById('mensaje').innerHTML;
			userScore.innerHTML = userPoints;
			computerScore.innerHTML = computerPoints;	
		} else {
			console.log (tieRound);
			document.getElementById('ronda').textContent = [i + 1];
			document.getElementById('do').textContent = 'EMPATE';
			mensajeOutput.innerHTML = [i + 1] + 'º: ' + tieRound + '<br>' + document.getElementById('mensaje').innerHTML;
		}

		i++;

	} while (i < rounds);
	
	if (userPoints > computerPoints) {
		mensajeOutput.innerHTML = ' *** ¡FELICITACIONES, GANASTE! ***<br>' + document.getElementById('mensaje').innerHTML;
	} else if (userPoints < computerPoints) {
		mensajeOutput.innerHTML = ' *** ¡QUÉ MAL! HAS PERDIDO CONTRA LA COMPUTADORA. ***<br>' + document.getElementById('mensaje').innerHTML;
	} else {
		mensajeOutput.innerHTML = ' *** ¡EMPATE! ¿OTRA RONDA? ***<br>' + document.getElementById('mensaje').innerHTML;	
	}
}
