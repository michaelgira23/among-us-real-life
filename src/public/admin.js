const socket = io({
	query: {
		role: 'ADMIN'
	}
});

async function wait(milliseconds) {
	await new Promise(resolve => {
		setTimeout(() => resolve(), milliseconds);
	});
}

const SOUNDS = {
	meeting: new Audio('/sounds/meeting.mp3'),
	sabotage: new Audio('/sounds/sabotage.mp3'),
	start: new Audio('/sounds/start.mp3'),
	sussyBoy: new Audio('/sounds/sussy-boy.mp3'),
	voteResult: new Audio('/sounds/vote-result.mp3'),
	youLose: new Audio('/sounds/you-lose.mp3'),
	youWin: new Audio('/sounds/you-win.mp3')
};

socket.on('play-meeting', async () => {
	await SOUNDS.meeting.play();
	await wait(2000);
	await SOUNDS.sussyBoy.play();
});

const startGame$ = document.querySelector('#start-game');

startGame$.addEventListener('click', () => {
	socket.emit('start-game');
});
