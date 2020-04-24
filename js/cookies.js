// variable pour affecter l'objet XMLHttpRequest
let requestCookies = new XMLHttpRequest();

// Recuperation des valeur dans l' URL

let IDCookies = $_GET('IDProduct');

// ouvre une nouvelle connexion en utilisant la méthode GET
requestCookies.open('GET', urlDB + IDCookies);

// charge les données de notre JSON récupéré
requestCookies.onload = function () {

     console.log(IDCookies)
}

// on envoie la requête
requestCookies.send()