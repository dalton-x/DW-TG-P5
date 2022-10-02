// Ajout des varibles pour les scripts JS
let IDproduct                                                   // Déclaration pour la récuperation dans l'url de la page produit
let subTotalValue                                               // Déclaration pour multiplication de la quantitée d'objet avec le prix unitaire
let ID                                                          // Déclaration pour récuperation de l'ID du produit en fonction de la clé du localstorage
let color                                                       // Déclaration pour récuperation de la couleur du produit en fonction de la clé du localstorage
let quantity                                                    // Déclaration pour récuperation de la quantitée du produit en fonction de la valeur du localstorage
let image                                                       // Déclaration pour récuperation de l'URL de l'image du produit en fonction de la valeur du localstorage
let nameProduct                                                 // Déclaration pour récuperation du nom du produit en fonction de la valeur du localstorage
let price                                                       // Déclaration pour récuperation du prix du produit en fonction de la valeur du localstorage
let description                                                 // Déclaration pour récuperation de la description du produit en fonction de la valeur du localstorage
let totalArrayCommand = []                                      // Déclaration pour mettre tous les sous-totaux et ensuite les additionnés pour un total 
let totalCommand                                                // Déclaration pour affichage sur la page panier et la page de remerciment du total de la commande
let indexQuantity                                               // Déclaration pour affichage dans le modal de confirmation du produit
let indexColor                                                  // Déclaration pour affichage dans le modal de confirmation du produit

//Variable des couleurs
let colorBlack = "black"  
let colorOrange = "#E68B07"
let colorGrey = "grey"     

// Déclaration pour recupere les valeurs du formulaire
let firstName                  
let last_name                  
let email                     
let adress                     
let city                       

//Valeurs pour l'envoie au serveur
let contact = {}               
let product_id = []            
let resultFinal = {}           
let responseOrderID                    

let widthRes = 319                                              // pour iphone 5/SE minimum

const urlDB = 'https://projet-5.dev-web.fr/api/teddies/'   // Déclaration de l'adresse de la BDD