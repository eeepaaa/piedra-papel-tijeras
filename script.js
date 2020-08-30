const picks = ['Piedra', 'Papel', 'Tijeras'];
const userWin = '¡Bien! Has ganado esta ronda.';
const computerWin = '¡Qué mal! Has perdido esta ronda.';
const tieRound = 'Tú y la computadora eligieron lo mismo así que han empatado esta ronda.';
let userPicks;
let computerPicks;

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

function juego() {
	
	let userPoints = 0;
	let computerPoints = 0;
	let i = 0;

	do {
		userPicks = userPick();
		computerPicks = computerTurn();

		if (userPicks === 'Tijeras' && computerPicks === 'Papel') {
			userPoints++;
			console.log(userWin + ' Has sumado 1 punto; y ahora tienes ' + userPoints + ' en total.');
		} else if (userPicks === 'Tijeras' && computerPicks === 'Piedra') {
			computerPoints++;
			console.log(computerWin + ' La computadora ha sumado 1 punto; y ahora tiene ' + computerPoints + ' en total.');
		}  else if (userPicks === 'Papel' && computerPicks === 'Piedra') {
			userPoints++;
			console.log(userWin + ' Has sumado 1 punto; y ahora tienes ' + userPoints + ' en total.');
		} else if (userPicks === 'Papel' && computerPicks === 'Tijeras') {
			computerPoints++;
			console.log(computerWin + ' La computadora ha sumado 1 punto; y ahora tiene ' + computerPoints + ' en total.');
		} else if (userPicks === 'Piedra' && computerPicks === 'Tijeras') {
			userPoints++;
			console.log(userWin + ' Has sumado 1 punto; y ahora tienes ' + userPoints + ' en total.' );
		} else if (userPicks === 'Piedra' && computerPicks === 'Papel') {
			computerPoints++;
			console.log(computerWin + ' La computadora ha sumado 1 punto; y ahora tiene ' + computerPoints + ' en total.');
		} else {
			console.log (tieRound);
		}

		i++;

	} while (i < 5);
	
	if (userPoints > computerPoints) {
		return '¡Felicitaciones, ganaste!'; 
	} else if (userPoints < computerPoints) {
		return 'Qué mal. Has perdido.'; 
	} else {
		return '¡EMPATE!'
	}
}
