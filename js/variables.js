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
let totalArrayCommand =[]
let numberOfItemsInPanier
let ID_Color

//Choix de la langue du site
let lang = language

// generation d'une date avec 1 semaine d'avance pour l'expiration des cookies
let numDate = new Date(Date.parse(new Date())+(604800*1000))
console.log(numDate)

// Récupération de tout les cookies de la page
var getAllCookies = document.cookie;

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
function setCookie(nom, valeur, expire, chemin, domaine, securite){
    document.cookie = nom + ' = ' + escape(valeur) + '  ' +
                    ((expire == undefined) ? '' : ('; expires = ' + expire)) +
                    ((chemin == undefined) ? '' : ('; path = ' + chemin)) +
                    ((domaine == undefined) ? '' : ('; domain = ' + domaine)) +
                    ((securite == true) ? '; secure' : '');
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
function getQuantity(num){
    if (num == 1){
        return quantityUnite = "unitée"
    }else{
        return quantityUnite = "unitées"
    }
}

//changement de langue
function changeLanguage(lang){
	console.log(lang)
}