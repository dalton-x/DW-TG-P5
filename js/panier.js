// variable pour affecter l'objet XMLHttpRequest
let requestPanier = new XMLHttpRequest();

// Recuperation des valeur dans l' URL
let indexColor = $_GET('color');

// table pour les couleurs des produits
let colorBackground = ["blue","yellow","grey","white","red"]

const eraseHtml = container => {
    const el = document.getElementById(container);
    while (el.firstChild) el.removeChild(el.firstChild);
};

//Funcion pour random un chiffre
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


// ouvre une nouvelle connexion en utilisant la méthode GET
requestPanier.open('GET', urlDB);

// charge les données de notre JSON récupéré
requestPanier.onload = function () {

    let teddiesChoice = JSON.parse(this.response);

    // declaration des variables de la page html
    let name
    let id
    let price
    let color
    let description
    let image

    for (let i = 0; i < teddiesChoice.length; i++) {
    
        // declaration des variables de la page html
    name = teddiesChoice[i].name;
    id = teddiesChoice[i]._id;
    price = teddiesChoice[i].price;
    color = teddiesChoice[i].colors;
    description = teddiesChoice[i].description;
    image = teddiesChoice[i].imageUrl;
    
    }


    var getAllCookies = document.cookie;
    //console.log("ALLCOOKIESBRUT",getAllCookies)
    // Si panier vide on efface la page html et on remplace par le inner
    if (getAllCookies == ""){
        eraseHtml('inner')
        var emptyPanier = document.getElementById("inner");
        emptyPanier.innerHTML +='<div>'+
                                    '<h2>Votre panier est vide</h2> '+
                                    '<a href="../index.html">Retour a l\'acceuil</a>'+
                                '</div>';
    }else{
        const allCookiesArrayName = getAllCookies.split(';');
        var QuantityProductPanier
        var ColorProductPanier
        //console.log("ARRAY",allCookiesArrayName);
        for (let i = 0; i < allCookiesArrayName.length; i++) {            
            //console.log("DIVISER",allCookiesArrayName[i]);  
            let fisrtSplit = allCookiesArrayName[i].split('=');
            //console.log("fisrtSplit",fisrtSplit);
            let IDColor = fisrtSplit[0].split('||');
            //console.log("IDColor",IDColor);
            var IDCookies = IDColor[0];
            //console.log(IDCookies)
            var colorCookies = IDColor[1];
            let IDColor2 = fisrtSplit[1].split('||');
            //console.log("IDColor2",IDColor2);
            let quantityColors = fisrtSplit[1].split('%2C');
            //console.log("quantityColors",quantityColors);
            var quantity = parseInt(quantityColors[0]);
            //console.log("quantity",quantity);
            color = quantityColors[1];
            //console.log("Color",color);
        }
    
    // Gestion du background color des produits
    let numberColorBackground = getRandomInt(colorBackground.length)

    let product_panier = document.getElementById("product_panier");
    product_panier.style.backgroundColor = colorBackground[numberColorBackground]

    // Récuperation du lieu pour installation des elements
    let imageProduct = document.getElementById("panier_image");
        
    // ajout pour la balise image
    const imgProduct = document.createElement("img");
        imgProduct.src = image;
        imgProduct.alt = description;
        imgProduct.classList.add("grd-");
        imgProduct.classList.add("image_product");
        
        // Affichage de l'image
        imageProduct.appendChild(imgProduct);

    //Mise en place du titre en H2
    let titleProduct = document.getElementById("panier_name");
        const h2 = document.createElement("h3");
        h2.textContent = name;

        // Affichage du titre
        titleProduct.appendChild(h2);

    // Mise en place de la description de l article
    let descProduct = document.getElementById("panier_description");
        const pDesc = document.createElement("p");
        pDesc.textContent = description;

        // Affichage de la description
        descProduct.appendChild(pDesc);

    // Mise en place du prix de l'article à l'unitée
    let priceProduct = document.getElementById("panier_price");
        const pPrice = document.createElement("p");
        pPrice.textContent = +price+" €";

        // Affichage du prix
        priceProduct.appendChild(pPrice);

    // Mise en place du prix de l'article à l'unitée
    let quantityProduct = document.getElementById("panier_quantity");
        const pQuantity = document.createElement("p");
        pQuantity.textContent = quantity;

        // Affichage du prix
        quantityProduct.appendChild(pQuantity);

    // Mise en place du prix de l'article à l'unitée
    let colorProduct = document.getElementById("panier_color");
        const pColor = document.createElement("p");
        pColor.textContent = color;

        // Affichage du prix
        colorProduct.appendChild(pColor);

    // Mise en place du prix de l'article à l'unitée
    let subTotalProduct = document.getElementById("panier_subttotal");
        const psubtotal = document.createElement("p");
        //console.log(typeof(price))
        psubtotal.textContent = price*quantity+" €";

        // Affichage du prix
        subTotalProduct.appendChild(psubtotal);

    // Mise en place dbouton pour vider le panier
    let panierClear = document.getElementById("panier_clear");  
        const buttonClear = document.createElement("a");
        buttonClear.textContent = "Vider le panier";
        //buttonClear.addEventListener("click",deleteAllCookies(IDCookies+'||'+color))  
        
        buttonClear.onclick = 
        //efface tout les cookies donc efface le panier 
        function () {
            console.log(IDCookies+'||'+color)
            document.cookie = IDCookies+'||'+color+"= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        }
        buttonClear.href = "../panier.html"
        // Affichage du boutton pour vider le panier
        panierClear.appendChild(buttonClear);
    }
}

// on envoie la requête
requestPanier.send()