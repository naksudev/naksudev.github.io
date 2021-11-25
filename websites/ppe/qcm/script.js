function valider() {
	// Collecter les réponses
	const answers = document.querySelectorAll('.answer');
	var results = new Array();

	for (let i = 0; i <= 2; i++) {
		if (answers[i].checked) {
			newResults = results.push(1);
		} else {
			newResults = results.push(2);
		}
	}

	console.log(results);

	// Nombre de bonnes et mauvaises réponses
	let correct = 0;
	let incorrect = 0;

	results.forEach(e => {
		if (e === 1)
			correct += 1;
		else if (e === 2)
			incorrect += 1;
	})

	// Afficher le résultat
	var paragraph = document.getElementById("p");
	document.write(`Correction dynamique du QCM<br><br>`);
	for (let i = 0; i <= results.length - 1; i++) {
		document.write(`<li>La question ${i + 1} est ${results[i] == 1 ? 'correct' : 'incorrect'}</li>` + "<br>");
	}
	document.write(`${correct} bonnes réponses <br>${incorrect} mauvaises réponses <br>Score final : ${correct}/${answers.length}`);
}