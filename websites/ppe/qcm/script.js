function valider() {
	// Collecter les réponses
	const answers = document.querySelectorAll('.answer');
	var results = new Array();

	for (let i = 0; i <= 9; i++) {
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
    const json = {
        "0": "Combien de pokémons sont présents dans la première génération ?",
        "1": "Quel est le nom du premier remake de Pokemon ?",
        "2": "Quel est la chance d'avoir un Shiny dans la 4e génération des jeux Pokémon ?",
        "3": "Est-ce que les pokémons shiny/chromatiques ont des statistiques plus elevés que les pokémons normaux ?",
        "4": "Comment s'appelle l'objet avec lequel on peut changer la forme Giratina ?",
        "5": "Qui est, d'après la commmunauté, le dresseur le plus puissant de la saga Pokémon ?",
        "6": "Qu'est-ce que le Pokérus ?",
        "7": "Quel est le record du prix de la carte Pokémon \"Dracaufeu\" ?",
        "8": "Quel est le nom du Pokémon bugué le plus connu ?",
        "9": "Quel effet de talent est vrai ?"
    };
    document.write(`<link rel="stylesheet" type="text/css" href="style.css">`);
	document.write(`Correction dynamique du QCM<br><br>`);
	for (let i = 0; i <= results.length - 1; i++) {
		document.write(`> ${json[i]} <li>La réponse est ${results[i] == 1 ? 'correct' : 'incorrect'}</li>` + "<br>");
	}
	document.write(`${correct} bonnes réponses <br>${incorrect} mauvaises réponses <br>Score final : ${correct}/${answers.length} | ${correct/10*100}% de bonnes réponses`);
    document.write(`<br>`)
    document.write(`<input type="button" id="retour" class="button button1" value="Retour au QCM" onclick="document.location.href='index.html';">`)
}