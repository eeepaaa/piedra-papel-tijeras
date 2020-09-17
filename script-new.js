//Variables
const picks = ['Piedra', 'Papel', 'Tijeras']
const startGame = document.getElementById('startGame');
const msg = document.getElementById('msg');
const user = document.getElementById('user');
const userScore = document.getElementById('userScore');
const compScore = document.getElementById('compScore');
const instruc = document.getElementById('instruc');
const roundDisplay = document.getElementById('roundDisplay');
const iconSelection = document.getElementById('iconSelection');
const userInfo = document.getElementById('userInfo');
const log = document.getElementById('log');
const gameContent = document.getElementById('gameContent');
const userSelect = document.getElementById('userSelect');
const left = document.getElementById('left');
const right = document.getElementById('right');
let currentRound = 0;
let userPoints = 0;
let compPoints = 0;


//Lets the computer make a choice
function computerTurn() {
	const computerPick = picks[Math.floor(Math.random() * picks.length)];
	return computerPick;
}

//Sets player's name
function setName() {
	const name = document.getElementById('name').value;
	user.textContent = name + ' ';
	console.log(user.textContent + 'has been set as user\'s name');
	return user;
}

//Sets scores
function updateScores() {
	userScore.textContent = userPoints;
	compScore.textContent = compPoints;
	console.log('Scores updated');
	roundDisplay.textContent = currentRound;

	rounds = roundSet();

	if (userPoints > (rounds / 2)) {
		checkEnd();
	} else if (compPoints > (rounds / 2)) {
		checkEnd();
	} else if (currentRound == rounds) {
		checkEnd();
	} else {
		return;
	}
}

//Checks for a winner
function checkEnd() { 

	if (userPoints > compPoints) {
		instruc.textContent = '¡GANASTE LA PARTIDA!';
		msg.innerHTML += '<br>*** ¡FELICITACIONES! GANASTE. ***';
	} else if (compPoints > userPoints) {
		instruc.textContent = '¡QUÉ MAL! PERDISTE.';
		msg.innerHTML += '<br>*** HAS PERDIDO LA PARTIDA. ***';
	} else {
		instruc.textContent = '¡EMPATE!';
		msg.innerHTML += '<br>*** EMPATE. ¿OTRA RONDA? ***';
	}	

	log.scrollTop = log.scrollTopMax;
	cannotPick();

	for(let i = 0; i < iconSelection.children.length; i++) {
		iconSelection.children[i].classList.remove('iconsEnable'); 
	}
	setTimeout(function() {
		removeShadow(userSelect);
		addShadow(log)
	}, 1001);
}

//Enables picks until game starts 
function enablePicks() {
	this.classList.toggle('iconsEnable');
};

//Resizes icons when hovering over
function canPick() {
	for(let i = 0; i < iconSelection.children.length; i++) {
		iconSelection.children[i].addEventListener('mouseenter', enablePicks); 
		iconSelection.children[i].addEventListener('mouseleave', enablePicks); 
	}
}
function cannotPick() {
	for(let i = 0; i < iconSelection.children.length; i++) {
		iconSelection.children[i].removeEventListener('mouseenter', enablePicks); 
		iconSelection.children[i].removeEventListener('mouseleave', enablePicks); 
	}
	
	for(let i = 0; i < iconSelection.children.length; i++) {
		iconSelection.children[i].onclick = function () {
			console.log('You must start a new game');
			instruc.textContent = 'debes iniciar un nuevo juego';
		}
	}
}

//Game logic
function game(x) {
	
	//Updating display
	computerPick = computerTurn();
	if (computerPick == picks[0]) {
		right.setAttribute('src', 'images/rock.png');
	} else if (computerPick == picks[1]) {
		right.setAttribute('src', 'images/paper.png');
	} else {
		right.setAttribute('src', 'images/scissors.png')
	}

	//Emphasizing selections
	left.classList.toggle('iconsEnable');
	right.classList.toggle('iconsEnable');
	setTimeout(function() {
		left.classList.toggle('iconsEnable');
		right.classList.toggle('iconsEnable');
	}, 300);

	//Before checking game logic
	addShadow(userSelect);
	addShadow(gameContent);
	currentRound++; 
	
	//Actual game logic
	if ((x == 'Tijeras' && computerPick == 'Papel') || (x == 'Papel' && computerPick == 'Piedra') || (x == 'Piedra' && computerPick == 'Tijeras')) {
		instruc.textContent = '¡ganaste esta ronda!'
		userPoints++;
		msg.innerHTML += `${currentRound}º: Ganaste esta ronda, y has sumado un punto. Tienes ${userPoints} en total.<br>`;
	} else if ((computerPick == 'Tijeras' && x == 'Papel') || (computerPick == 'Papel' && x == 'Piedra') || (computerPick == 'Piedra' && x == 'Tijeras')) {
		instruc.textContent = 'perdiste esta ronda';
		compPoints++;
		msg.innerHTML += `${currentRound}º: Perdiste esta ronda. La computadora ha sumado un punto; tiene ${userPoints} en total.<br>`;
	} else {
		instruc.textContent = '¡empate entre la computadora y tú!';
		msg.innerHTML += `${currentRound}º: Empate entre ambos.<br>`;
	}

	//After game logic has been checked
	log.scrollTop = log.scrollTopMax;
	updateScores();
	setTimeout(function() {
		removeShadow(gameContent);
	}, 300);
	setTimeout(function() {
		addShadow(userSelect);
	}, 300);
}

//Lets game begin
function begin() {
	canPick();
	letpick();
	setName();
	removeShadow(userSelect);
	removeShadow(userInfo);
	removeShadow(gameContent);
	userSelect.classList.add('boxShadow');
	roundDisplay.textContent = 0;
}

//Sets rounds
function roundSet() {
	let rounds = parseInt(document.getElementById('rounds').value, 10);
	return rounds;
}

//Lets user make a choice
function letpick() {
	for(let i = 0; i < iconSelection.children.length; i++) {
		iconSelection.children[i].onclick = function () {
			choice = picks[i]; 
			game(choice);
			if (choice == picks[0]) {
				left.setAttribute('src','images/rock.png');
			} else if (choice == picks[1]) {
				left.setAttribute('src','images/paper.png');
			} else {
				left.setAttribute('src','images/scissors.png');
			}
		}

	}
}

//Resets Everythign
function restart() {
	msg.innerHTML = '';
	instruc.textContent = 'selecciona tu elección';
	userPoints = 0;
	compPoints = 0;
	userScore.textContent = 0;
	compScore.textContent = 0;
	currentRound = 0;
}

//Add focus to boxes
function addShadow(x) {
	x.classList.toggle('boxShadow');
}
function removeShadow(x) {
	x.classList.remove('boxShadow');
}


//Parameters
startGame.addEventListener('click', begin);
startGame.addEventListener('click', restart);
userInfo.classList.add('boxShadow');
