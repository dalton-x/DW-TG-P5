// function pour effacer l'HTML
const eraseHtml = container => {
    const element = document.getElementById(container);
    while (element.firstChild) element.removeChild(element.firstChild);
};

// ajout d'un "s" a unitée si quantity > 1
function getQuantity(num) {
    if (num == 1) {
        return quantityUnite = "unitée"
    } else {
        return quantityUnite = "unitées"
    }
}

function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    firstName = document.getElementById("first_name").value;
    lastName = document.getElementById("last_name").value;
    email = document.getElementById("email").value;
    adress = document.getElementById("adress").value;
    city = document.getElementById("city").value;

    if (!firstName.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/) ||
        !lastName.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/) ||
        !adress.match(/^([0-9]{1,3}(([,. ]?){1}[a-zA-Zàâäéèêëïîôöùûüç' ]+))$/) ||
        !city.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/) ||
        !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        return contact = false
    }

    // verification que tout les champs soit bien remplis avec un minimum de caracteres
    if (firstName.length < 3 || lastName.length < 3 || email.length < 3 || adress.length < 3  || city.length < 1) {
        return contact = false
    } else {
        return contact = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            adress: adress,
            city: city
        };
    };
};