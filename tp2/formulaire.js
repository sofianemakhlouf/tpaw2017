function validation() {
	
    if (document.getElementById("Nom").value=='') {
        document.getElementById("error").innerHTML="la saisie du nom est obligatoire";

    }
	
	if (document.getElementById("Prénom").value=='') {
        document.getElementById("error").innerHTML="la saisie du Prenom est obligatoire";
	}
	if (document.getElementById("Date de naissance").value=='') {
        document.getElementById("error").innerHTML="la saisie de la date de naissance est obligatoire";
	}
	if (document.getElementById("Adresse").value=='') {
        document.getElementById("error").innerHTML="la saisie de l'adresse est obligatoire";
	}
	if (document.getElementById("Mail").value=='') {
        document.getElementById("error").innerHTML="la saisie du Mail est obligatoire";
			
	}
	
}

	