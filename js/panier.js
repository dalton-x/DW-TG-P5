// variable pour affecter l'objet XMLHttpRequest
let requestPanier = new XMLHttpRequest();

// Recuperation des valeur dans l' URL
let indexColor = $_GET('color');

// recuperation des cookies créés sur la/les pages produit(s)
function getCookie(name){
    if(document.cookie.length == 0)
      return null;

    var regSepCookie = new RegExp('(; )', 'g');
    var cookies = document.cookie.split(regSepCookie);

    for(var i = 0; i < cookies.length; i++){
      var regInfo = new RegExp('=', 'g');
      var infos = cookies[i].split(regInfo);
      if(infos[0] == name){
        return unescape(infos[1]);
      }
    }
    return null;
}

const eraseHtml = container => {
    const el = document.getElementById(container);
    while (el.firstChild) el.removeChild(el.firstChild);
};

// ouvre une nouvelle connexion en utilisant la méthode GET
requestPanier.open('GET', urlDB);

// charge les données de notre JSON récupéré
requestPanier.onload = function () {

    let teddiesChoice = JSON.parse(this.response);

    for (let i = 0; i < teddiesChoice.length; i++) {
    
        // declaration des variables de la page html
    let name = teddiesChoice[i].name;
    let id = teddiesChoice[i]._id;
    let price = teddiesChoice[i].price;
    let color = teddiesChoice[i].colors;
    let description = teddiesChoice[i].description;
    let image = teddiesChoice[i].imageUrl;

    
    }


    var getAllCookies = document.cookie;
    console.log(getAllCookies)
    // Si panier vide on efface la page html et on remplace par le inner
    if (getAllCookies == ""){
        eraseHtml('inner')
        var emptyPanier = document.getElementById("inner");
        emptyPanier.innerHTML +=    '<div>'+
                                       '<h2>Votre panier est vide</h2> '+
                                       '<a href="../index.html">Retour a l\'acceuil</a>'+
                                    '</div>';
    }else{

    
        // Récupération des cookies et splits en variables
        //let getCookies = getCookie(id+indexColor)
        // const cookies = getCookies.split(',');
        // let IDProduct = cookies[0];
        // let colorCookies = cookies[1];
        // let quantity = cookies[2];

        }
    // // Mise en place du select du choix des couleurs de l'article
    // let imageProduct = document.getElementById("panier_image");
        
    // // ajout pour la balise image
    // const imgProduct = document.createElement("img");
    //     imgProduct.src = image;
    //     imgProduct.alt = description;
    //     imgProduct.classList.add("grd-");
    //     imgProduct.classList.add("image_product");
        
    //     // Affichage de l'image
    //     imageProduct.appendChild(imgProduct);

    // //Mise en place du titre en H2
    // let titleProduct = document.getElementById("panier_name");
    //     const h2 = document.createElement("h3");
    //     h2.textContent = name;

    //     // Affichage du titre
    //     titleProduct.appendChild(h2);

    // // Mise en place de la description de l article
    // let descProduct = document.getElementById("panier_description");
    //     const pDesc = document.createElement("p");
    //     pDesc.textContent = description;

    //     // Affichage de la description
    //     descProduct.appendChild(pDesc);

    // // Mise en place du prix de l'article à l'unitée
    // let priceProduct = document.getElementById("panier_price");
    //     const pPrice = document.createElement("p");
    //     pPrice.textContent = +price+" €";

    //     // Affichage du prix
    //     priceProduct.appendChild(pPrice);

    // // Mise en place du prix de l'article à l'unitée
    // let quantityProduct = document.getElementById("panier_quantity");
    //     const pQuantity = document.createElement("p");
    //     pQuantity.textContent = quantity;

    //     // Affichage du prix
    //     quantityProduct.appendChild(pQuantity);

    // // Mise en place du prix de l'article à l'unitée
    // let colorProduct = document.getElementById("panier_color");
    //     const pColor = document.createElement("p");
    //     pColor.textContent = color;

    //     // Affichage du prix
    //     colorProduct.appendChild(pColor);

    // // Mise en place du prix de l'article à l'unitée
    // let subTotalProduct = document.getElementById("panier_subttotal");
    //     const psubtotal = document.createElement("p");
    //     psubtotal.textContent = teddiesChoice.price*quantity+" €";

    //     // Affichage du prix
    //     subTotalProduct.appendChild(psubtotal);
    

}

// on envoie la requête
requestPanier.send()