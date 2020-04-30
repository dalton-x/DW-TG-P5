// Ajout des varible pour les scripts JS
let nameCookies
let subTotalValue
let ID
let color
let quantity
let image
let nameProduct
let price
let description
let totalArrayCommand = []
let numberOfItemsInPanier
let ID_Color
let totalCommand
let values



let buttonValid
let result
let indexQuantity
let indexColor
let firstSplit

//Variable des couleurs
let colorBlack = "black";
let colorOrange = "#E68B07"
let colorGrey = "grey"

//Value pour le formulaire
let firstName
let last_name
let email
let adress
let city

//Valeurs pour l'envoie au serveur
let contact={}
let product_id = []
let resultFinal = {}
let response

//Choix de la langue du site
let lang = language

// generation d'une date avec 1 semaine d'avance pour l'expiration des cookies
//let numDate = new Date(Date.parse(new Date())+(604800*1000))

// Récupération de tout les cookies de la page
//var getAllCookies = document.cookie;

// déclaration de l'adress de la BDD
const urlDB = 'http://localhost:3000/api/teddies/'

// function recuperation methode GET
function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

// Mise en place des fonctions de la page
// function setCookie(nom, valeur, expire, chemin, domaine, securite){
//     document.cookie = nom + ' = ' + escape(valeur) + '  ' +
//                     ((expire == undefined) ? '' : ('; expires = ' + expire)) +
//                     ((chemin == undefined) ? '' : ('; path = ' + chemin)) +
//                     ((domaine == undefined) ? '' : ('; domain = ' + domaine)) +
//                     ((securite == true) ? '; secure' : '');
// }

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
function getQuantity(num){
    if (num == 1){
        return quantityUnite = "unitée"
    }else{
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
    // Afficher la valeur
    return contact = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        adress:adress,
        city:city
    }
}