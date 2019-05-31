function* forever() {
	let value = 1;
	while (true) {
		console.log(value++);
		yield;
	}
}

function today() {
	let date = new Date();
	console.log(date);
}

const foreverGenerator = forever();
foreverGenerator.next();
foreverGenerator.next();
today();

// o yield faz com que a função não fique em loop eterno, causando uma pausa a cada iteração e
// só executando o próximo passo quando se fizer o próximo .next()