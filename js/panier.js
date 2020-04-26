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

// Récupération de tout les cookies de la page
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
// si panier avec des objets     str.split(search).join(replacement)
}else{
    let getAllCookiesSpace = getAllCookies.split("%20").join(" ")
    let getAllCookiesSpaceVirgule = getAllCookiesSpace.split("%2C").join(",")
    let getAllCookiesOK = getAllCookiesSpaceVirgule.split("%3A").join(":")
    getAllCookiesOK = getAllCookiesOK.split(';');
    for (let i = 0; i < getAllCookiesOK.length; i++) {
        let firstSplit = getAllCookiesOK[i].split('='); //console.log("fisrtSplit",firstSplit);
        let IDcolor = firstSplit[0]; //console.log("IDcolor",IDcolor);
            let ID_Color = firstSplit[0].split('||'); //console.log("ID_Color",ID_Color);
                let ID = ID_Color[0]; //console.log("ID",ID);
                let color = ID_Color[1]; //console.log("color",color);        
        let value = firstSplit[1].split(','); //console.log(value[5])
            // value definit en variable
        let quantity = value[0]; //console.log("quantity",quantity)
        let image = value[1]; //console.log("image",image)
        let name = value[2]; //console.log("name",name)
        let price = value[3]; //console.log("price",price)
            //creation array description
            let descArray = [];
            let description
            for (let i = 4; i < value.length; i++) {
            descArray.push(value[i])
                //console.log("description",descArray)
            description = descArray.toString()
                //console.log("descstring",description)
            }
    
    // Gestion du background color des produits
    //let numberColorBackground = getRandomInt(colorBackground.length);

    // // On crée une row par article
    // let allItems = document.getElementById("article")
    //     const all_items = document.createElement("div");
    //     all_items.id = "all_items";
    //     all_items.classList.add("col-md-8");
    //     all_items.classList.add("overflow-auto");

    //     // On Insere la row dans la page HTML
    //     allItems.appendChild(all_items);

    // On crée une row par article
    let articlePanier = document.getElementById("article_panier")
        const product_panier = document.createElement("div");
        product_panier.id = "product_panier"+i;
        product_panier.classList.add("row");
        product_panier.classList.add("product_panier");

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
                name_title.textContent = name;

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


            
        

    // let product_panier = document.getElementById("product_panier");
    // product_panier.style.backgroundColor = colorBackground[numberColorBackground]

    // // Récuperation du lieu pour installation des elements
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
    //     let colorSpace = color.replace("%20", " ")
    //     pColor.textContent = colorSpace;

    //     // Affichage du prix
    //     colorProduct.appendChild(pColor);

    // // Mise en place du prix de l'article à l'unitée
    // let subTotalProduct = document.getElementById("panier_subttotal");
    //     const psubtotal = document.createElement("p");
    //     //console.log(typeof(price))
    //     psubtotal.textContent = price*quantity+" €";
    //     var subTotal = price*quantity

    //     // Affichage du prix
    //     subTotalProduct.appendChild(psubtotal);
    }
    // Mise en place dbouton pour vider le panier
    let panierClear = document.getElementById("panier_clear");       
    panierClear.style.backgroundColor = "blue";
    panierClear.style.top = "15%";
    panierClear.classList.add("validation");
    panierClear.classList.add("col-md-12");
    panierClear.classList.add("text-center");
    panierClear.classList.add("pull-down");
        const buttonClear = document.createElement("a"); 
        buttonClear.title = "Vider le panier";
        buttonClear.textContent = "Vider le panier";
        buttonClear.style.textDecoration ="none";
        buttonClear.style.color = "yellow";
        
        buttonClear.onclick = 
        //efface tout les cookies donc efface le panier 
        function () {
            console.log(IDCookies+'||'+color)
            document.cookie = IDCookies+'||'+color+"= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        }
        buttonClear.href = "../panier.html"
        // Affichage du boutton pour vider le panier
        panierClear.appendChild(buttonClear);

    
    // let panierTotal = document.getElementById("panier_total");
    // panierTotal.classList.add("text-center");
    // panierTotal.classList.add("col-md-12");
    // panierTotal.textContent += subTotal+ " €";
    
}