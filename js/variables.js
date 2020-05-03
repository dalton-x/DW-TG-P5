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
let contact = {}
let product_id = []
let resultFinal = {}
let response
let responseOrderID

// déclaration de l'adress de la BDD
const urlDB = 'http://localhost:3000/api/teddies/'