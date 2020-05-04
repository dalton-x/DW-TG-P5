// function recuperation methode GET
function $_GET(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function (m, key, value) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}

// function pour effacer l'HTML
const eraseHtml = container => {
    const element = document.getElementById(container);
    while (element.firstChild) element.removeChild(element.firstChild);
};

//Funcion pour random un chiffre
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

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
    if (firstName.length < 3 || lastName.length < 3 || email.length < 3 || adress.length < 3 || city.length < 3) {
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