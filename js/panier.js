// table pour les couleurs des produits
let colorBackground = ["white","yellow","grey"]

// function pour effacer l'HTML
const eraseHtml = container => {
    const el = document.getElementById(container);
    while (el.firstChild) el.removeChild(el.firstChild);
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

// Récupération de tout les cookies de la page
var getAllCookies = document.cookie;

//Déclaration des variable
let nameCookies
let subTotalValue
let ID
let color
let quantity
let image
let nameProduct
let price
let description

// Si panier vide on efface la page html et on remplace par le inner
if (getAllCookies == ""){
    eraseHtml('inner')
    var emptyPanier = document.getElementById("inner");
    emptyPanier.innerHTML +='<div>'+
                                '<h2>Votre panier est vide</h2> '+
                                '<a href="../index.html">Retour a l\'acceuil</a>'+
                            '</div>';
// si panier avec des objets     str.split(search).join(replacement)
}else{
    let getAllCookiesSpace = getAllCookies.split("%20").join(" ")
    let getAllCookiesSpaceVirgule = getAllCookiesSpace.split("%2C").join(",")
    let getAllCookiesOK = getAllCookiesSpaceVirgule.split("%3A").join(":")
    getAllCookiesOK = getAllCookiesOK.split(';');
    for (let i = 0; i < getAllCookiesOK.length; i++) {
        let firstSplit = getAllCookiesOK[i].split('=');
        nameCookies = firstSplit[0];
        let ID_Color = nameCookies.split('||');
            ID = ID_Color[0];
            color = ID_Color[1];  
        let value = firstSplit[1].split(',');
            // value definit en variable
        quantity = value[0];
        image = value[1];
        nameProduct = value[2];
        price = value[3];
            //creation array description
            let descArray = [];
            for (let i = 4; i < value.length; i++) {
            descArray.push(value[i])
            description = descArray.toString()
            }
    
    // Gestion du background color des produits
    let numberColorBackground = getRandomInt(colorBackground.length);

    // On crée une row par article
    let articlePanier = document.getElementById("article_panier")
        const product_panier = document.createElement("div");
        product_panier.id = "product_panier"+i;
        product_panier.classList.add("row");
        product_panier.classList.add("product_panier");
        product_panier.classList.add("mb-3");
        product_panier.style.backgroundColor = "white" //colorBackground[numberColorBackground]
        product_panier.style.border = '5px red solid'

        // On Insere la row dans la page HTML
        articlePanier.appendChild(product_panier);

    // On créé une div pour y mettre l'image
    let productPanier = document.getElementById("product_panier"+i);
        // Création de la div pour l'article
        const image_Panier = document.createElement("div");
            image_Panier.id = "panier_image"+i;
            image_Panier.classList.add("col-md-3");
            
        //On insere la div pour affiché l'image
        productPanier.appendChild(image_Panier);
        
        // ajout pour la balise image
        let imageProduct = document.getElementById("panier_image"+i);
        const img_Product = document.createElement("img");
            img_Product.src = image;
            img_Product.alt = description;
            img_Product.classList.add("image_product");

        // Affichage de l'image
        imageProduct.appendChild(img_Product);

        // Création de la colonne pour affichage des infos du produit
        const info_Product = document.createElement("div");
        info_Product.id = "product_info"+i;
        info_Product.classList.add("col-md-9");
            
        // envoie de la colonne des infos
        productPanier.appendChild(info_Product);

            let namePrice = document.getElementById('product_info'+i)
            const name_Price = document.createElement("div")
            name_Price.id = "name_price"+i;
            name_Price.classList.add("row");

            // envoie de la colonne des infos
            namePrice.appendChild(name_Price);

            // Création de la colonne pour affichage des infos du produit
            const name_Product = document.createElement("div");
            name_Product.id = "name_product"+i;
            name_Product.classList.add("col-md-6");
                
            // envoie de la colonne des infos
            name_Price.appendChild(name_Product);
            
            //Mise en place du titre en H2
            let nameTitle = document.getElementById("name_product"+i);
                const name_title = document.createElement("h3");
                name_title.textContent = nameProduct;

                // Affichage du titre
                nameTitle.appendChild(name_title);

            // Création de la colonne pour affichage des infos du produit
            const price_Product = document.createElement("div");
            price_Product.id = "price_Product"+i;
            price_Product.classList.add("col-md-6");
                
            // envoie de la colonne des infos
            name_Price.appendChild(price_Product);
            
            //Création de la balise <p> pour insere le prix
            const price_unite = document.createElement("p");
            price_unite.textContent = "prix à l'unitée : "+price+" €";

            // Affichage du prix
            price_Product.appendChild(price_unite);

            // Ajout de la ligne pour la description 
            let descriptionProduct = document.getElementById('product_info'+i)
            const desc = document.createElement("div")
            desc.id = "desc"+i;
            desc.classList.add("row");

            // envoie de la row
            descriptionProduct.appendChild(desc);

                // Création de la colonne pour affichage de la description
                const desc_product = document.createElement("div");
                desc_product.id = "desc_product"+i;
                desc_product.classList.add("col-md-12");
                    
                // envoie de la colonne
                desc.appendChild(desc_product);
                
                //Création de la balise <p> pour insere la description
                let displayDesc = document.getElementById("desc_product"+i);
                    const display_desc = document.createElement("p");
                    //desc_product.style.overflow = "hidden";
                    display_desc.textContent = description;

                    // Affichage du de la description
                    displayDesc.appendChild(display_desc);
            

            // Ajout de la ligne pour la quantitée et la couleur
            let colorQuantity = document.getElementById('product_info'+i)
            const color_quantity = document.createElement("div")
            color_quantity.id = "color_quantity"+i;
            color_quantity.classList.add("row");

            // envoie de la row
            colorQuantity.appendChild(color_quantity);

                // Création de la colonne pour affichage de la couleur
                const color_product = document.createElement("div");
                color_product.id = "color_product"+i;
                color_product.classList.add("col-md-6");
                    
                // envoie de la colonne
                color_quantity.appendChild(color_product);
                
                //Création de la balise <p> pour insere la couleur
                let displaycolor = document.getElementById("color_product"+i);
                    const display_color = document.createElement("p");
                    //desc_product.style.overflow = "hidden";
                    display_color.textContent = "Couleur : "+color;

                    // Affichage du de la couleur
                    displaycolor.appendChild(display_color);

                // Création de la colonne pour affichage de la couleur
                const quantity_product = document.createElement("div");
                quantity_product.id = "quantity_product"+i;
                quantity_product.classList.add("col-md-6");
                    
                // envoie de la colonne
                color_quantity.appendChild(quantity_product);
                
                //Création de la balise <p> pour insere la couleur
                let displayquantity = document.getElementById("quantity_product"+i);
                    const display_quantity = document.createElement("p");
                    //desc_product.style.overflow = "hidden";
                    display_quantity.textContent = "Quantitée : "+quantity+ " "+getQuantity(quantity);

                    // Affichage du de la couleur
                    displayquantity.appendChild(display_quantity);

            // Ajout de la ligne pour le sous total 
            let subTotalDel = document.getElementById('product_info'+i)
            const subTotal_del = document.createElement("div")
            subTotal_del.id = "subTotal_del"+i;
            subTotal_del.classList.add("row");

            // envoie de la row
            subTotalDel.appendChild(subTotal_del);

                // Création de la colonne pour affichage du sous total
                const subTotal_product = document.createElement("div");
                subTotal_product.id = "subTotal_product"+i;
                subTotal_product.classList.add("col-md-6");
                    
                // envoie de la colonne
                subTotal_del.appendChild(subTotal_product);

                //Création de la balise <p> pour insere le sous total
                let displaySubTotal = document.getElementById("subTotal_product"+i);
                    const display_SubTotal = document.createElement("p");
                    //desc_product.style.overflow = "hidden";
                    subTotalValue = quantity*price;
                    display_SubTotal.textContent = "Sous-Total : "+ subTotalValue +" €";

                    // Affichage du de le sous total
                    displaySubTotal.appendChild(display_SubTotal);

                // Création de la colonne pour affichage de la description
                const del_product = document.createElement("div");
                del_product.id = "del_product"+i;
                del_product.classList.add("col-md-6");
                    
                // envoie de la colonne
                subTotal_del.appendChild(del_product);

                    const display_del = document.createElement("button");
                    display_del.textContent = "supprimé article"
                    display_del.onclick = function () {
                        document.cookie = nameCookies + "= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
                        location.reload(true);
                    }


                    // Affichage du de la couleur
                    del_product.appendChild(display_del);

    }
    // fin de mon "for" pour l'affichage dynamique de mes articles
    
    // Affichage du prix total de la commande
    let panierTotal = document.getElementById("panier_total");
    panierTotal.classList.add("text-center");
    panierTotal.classList.add("col-md-12");
    var totalCommand =+ subTotalValue;
    panierTotal.textContent = totalCommand+ " €";

    // Mise en place dbouton pour vider le panier
    let panierClear = document.getElementById("panier_clear");       
    //panierClear.style.backgroundColor = "blue";
    panierClear.style.top = "15%";
    panierClear.classList.add("validation");
    panierClear.classList.add("col-md-12");
    panierClear.classList.add("text-center");
    panierClear.classList.add("pull-down");
        const buttonClear = document.createElement("button"); 
        buttonClear.title = "Vider le panier";
        buttonClear.textContent = "Vider le panier";
        buttonClear.style.textDecoration ="none";
        buttonClear.style.borderRadius = "20px"
        buttonClear.style.color = "yellow";
        buttonClear.style.backgroundColor = "blue";
        buttonClear.onclick = 
        //efface tout les cookies donc efface le panier 
        function () {
            for (let i = 0; i < getAllCookiesOK.length; i++) {
                let firstSplit = getAllCookiesOK[i].split('=');
                document.cookie = firstSplit[0] +"= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
                location.reload(true);
            }
        }
        
        // Affichage du boutton pour vider le panier
        panierClear.appendChild(buttonClear);
    
}