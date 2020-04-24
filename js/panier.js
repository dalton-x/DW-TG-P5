// variable pour affecter l'objet XMLHttpRequest
let requestProduct = new XMLHttpRequest();

// Recuperation des valeur dans l' URL

let IDproduct = $_GET('IDProduct');

// ouvre une nouvelle connexion en utilisant la méthode GET
requestProduct.open('GET', urlDB + IDproduct);

// charge les données de notre JSON récupéré
requestProduct.onload = function () {

     console.log(IDproduct)
}

// on envoie la requête
requestProduct.send()