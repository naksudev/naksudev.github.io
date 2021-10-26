// Fonction qui se lance au chargement de la page
function onload() {
    // Date de la facture (maj auto) 
    document.getElementById('date').value=formatDate(Date.now()); 
}

// Fonction qui permet de convertir la chaine de caractère de base de Date.now() en quelque chose de plus présentable.
function formatDate(date) {
    var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }

    if (day.length < 2) {
        day = '0' + day;
    }

    return [day, month, year].join('/');
}

// Fonction qui dépend du bouton "Calculer"
function calculate() {
	// Prix
	var p1 = parseFloat(document.getElementById('p1').value);
	var p2 = parseFloat(document.getElementById('p2').value);
	var p3 = parseFloat(document.getElementById('p3').value);
	var p4 = parseFloat(document.getElementById('p4').value);
	var p5 = parseFloat(document.getElementById('p5').value);
	var p6 = parseFloat(document.getElementById('p6').value);
	var p7 = parseFloat(document.getElementById('p7').value);
	var p8 = parseFloat(document.getElementById('p8').value);
	var p9 = parseFloat(document.getElementById('p9').value);
	var p10 = parseFloat(document.getElementById('p10').value);
	const prix = p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
	// Quantité
	var q1 = parseFloat(document.getElementById('q1').value);
	var q2 = parseFloat(document.getElementById('q2').value);
	var q3 = parseFloat(document.getElementById('q3').value);
	var q4 = parseFloat(document.getElementById('q4').value);
	var q5 = parseFloat(document.getElementById('q5').value);
	var q6 = parseFloat(document.getElementById('q6').value);
	var q7 = parseFloat(document.getElementById('q7').value);
	var q8 = parseFloat(document.getElementById('q8').value);
	var q9 = parseFloat(document.getElementById('q9').value);
	var q10 = parseFloat(document.getElementById('q10').value);
	const qte = q1+q2+q3+q4+q5+q6+q7+q8+q9+q10;
	// Total
	var t1 = parseFloat(document.getElementById('t1').value=p1*q1);
	var t2 = parseFloat(document.getElementById('t2').value=p2*q2);
	var t3 = parseFloat(document.getElementById('t3').value=p3*q3);
	var t4 = parseFloat(document.getElementById('t4').value=p4*q4);
	var t5 = parseFloat(document.getElementById('t5').value=p5*q5);
	var t6 = parseFloat(document.getElementById('t6').value=p6*q6);
	var t7 = parseFloat(document.getElementById('t7').value=p7*q7);
	var t8 = parseFloat(document.getElementById('t8').value=p8*q8);
	var t9 = parseFloat(document.getElementById('t9').value=p9*q9);
	var t10 = parseFloat(document.getElementById('t10').value=p10*q10);
    const total = t1+t2+t3+t4+t5+t6+t7+t8+t9+t10; 

	// Remise
	const remise = parseFloat(document.getElementById('r1').value);
	// Sous-Total
	const sousTotal = parseFloat(document.getElementById('st1').value=prix*qte);
	// Sous-Total sans les remises
	const sT_r = parseFloat(document.getElementById('st_r1').value=sousTotal-(remise/100));
	// Taux d'impots
	const tauxImpots = parseFloat(document.getElementById('ti1').value);
	// Taxe totale
	const totalTaxe = parseFloat(document.getElementById('tt1').value=Math.round(sousTotal*(tauxImpots/100)));
	// Solde
	const solde = parseFloat(document.getElementById('solde').value=sT_r+totalTaxe+"€");
    // Frais exp
    const fraisexp = parseFloat(document.getElementById('e_m1').value);
}

// Fonction qui dépend du bouton "Code Source"
function access() {
	var username = prompt("Identifiant", "");
	var password = prompt("Mot de passe", "");

	if (username === "Admin_GSB" && password === "admin") {
		document.location.href="pdf.html";
	} else {
        alert("Mauvais identifiant. Veuillez réessayer.")
    }
}