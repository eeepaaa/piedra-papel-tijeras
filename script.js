const picks = ['Piedra', 'Papel', 'Tijeras'];
const userWin = '¡Bien! Has ganado esta ronda.';
const computerWin = 'Has perdido esta ronda.';
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

function juego(rounds) {
	
	let userPoints = 0;
	let computerPoints = 0;
	let i = 0;

	do {
		userPicks = userPick();
		computerPicks = computerTurn();

		if (userPicks === 'Tijeras' && computerPicks === 'Papel') {
			userPoints++;
			console.log(userWin + ' Has sumado 1 punto; y ahora tienes ' + userPoints + ' en total.');
			document.getElementById('ronda').textContent = [i + 1];
			document.getElementById('mensaje').innerHTML += [i + 1] + 'º: ' + userWin + ' Has sumado 1 punto; y ahora tienes ' + userPoints + ' en total.<br>'
		} else if (userPicks === 'Tijeras' && computerPicks === 'Piedra') {
			computerPoints++;
			console.log(computerWin + ' La computadora ha sumado 1 punto; y ahora tiene ' + computerPoints + ' en total.');
			document.getElementById('ronda').textContent = [i + 1];
			document.getElementById('mensaje').innerHTML += [i + 1] + 'º: ' + computerWin + ' La computadora ha sumado 1 punto; y ahora tiene ' + computerPoints + ' en total.<br>'
		}  else if (userPicks === 'Papel' && computerPicks === 'Piedra') {
			userPoints++;
			console.log(userWin + ' Has sumado 1 punto; y ahora tienes ' + userPoints + ' en total.');
			document.getElementById('ronda').textContent = [i + 1];	
			document.getElementById('mensaje').innerHTML += [i + 1] + 'º: ' + userWin + ' Has sumado 1 punto; y ahora tienes ' + userPoints + ' en total.<br>';
		} else if (userPicks === 'Papel' && computerPicks === 'Tijeras') {
			computerPoints++;
			console.log(computerWin + ' La computadora ha sumado 1 punto; y ahora tiene ' + computerPoints + ' en total.');
			document.getElementById('ronda').textContent = [i + 1];
			document.getElementById('mensaje').innerHTML += [i + 1] + 'º: ' + computerWin + ' La computadora ha sumado 1 punto; y ahora tiene ' + computerPoints + ' en total.<br>'
		} else if (userPicks === 'Piedra' && computerPicks === 'Tijeras') {
			userPoints++;
			console.log(userWin + ' Has sumado 1 punto; y ahora tienes ' + userPoints + ' en total.' );
			document.getElementById('ronda').textContent = [i + 1];
			document.getElementById('mensaje').innerHTML += [i + 1] + 'º: ' + userWin + ' Has sumado 1 punto; y ahora tienes ' + userPoints + ' en total.<br>';
		} else if (userPicks === 'Piedra' && computerPicks === 'Papel') {
			computerPoints++;
			console.log(computerWin + ' La computadora ha sumado 1 punto; y ahora tiene ' + computerPoints + ' en total.');
			document.getElementById('ronda').textContent = [i + 1];
			document.getElementById('mensaje').innerHTML += [i + 1] + 'º: ' + computerWin + ' La computadora ha sumado 1 punto; y ahora tiene ' + computerPoints + ' en total.<br>'
		} else {
			console.log (tieRound);
			document.getElementById('ronda').textContent = [i + 1];
			document.getElementById('mensaje').innerHTML += [i + 1] + 'º: ' + tieRound + '<br>';
		}

		i++;

	} while (i < rounds);
	
	if (userPoints > computerPoints) {
		return '¡Felicitaciones, ganaste!'; 
	} else if (userPoints < computerPoints) {
		return 'Qué mal. Has perdido.'; 
	} else {
		return '¡EMPATE!'
	}
}
