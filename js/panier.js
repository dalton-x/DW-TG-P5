//Vérification que l'on est bien sur le panier
if (window.location.pathname == '/panier.html' ){
    // Si panier vide on efface la page html et on remplace par le inner
    if (getAllCookies == ""){
        eraseHtml('inner')
        var emptyPanier = document.getElementById("inner");
        emptyPanier.innerHTML += lang.panier.inner;
    // si panier avec des objets
    }else{        
        let sendResult = new XMLHttpRequest();
        let getAllCookiesSpace = getAllCookies.split("%20").join(" ")
        let getAllCookiesSpaceVirgule = getAllCookiesSpace.split("%2C").join(",")
        let getAllCookiesOK = getAllCookiesSpaceVirgule.split("%3A").join(":")
        getAllCookiesOK = getAllCookiesOK.split(';');
        for (let i = 0; i < getAllCookiesOK.length; i++) {
            firstSplit = getAllCookiesOK[i].split('=');
            nameCookies = firstSplit[0];
            ID_Color = nameCookies.split('||');
                ID = ID_Color[0];
                ID = ID.split(" ").join("")
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
            
        // On crée une row par article
        let articlePanier = document.getElementById("article_panier")
            const product_panier = document.createElement("div");
            product_panier.id = "product_panier"+i;
            product_panier.classList.add("row");
            product_panier.classList.add("product_panier");
            product_panier.classList.add("mb-3");
            product_panier.style.backgroundColor = "white"
            product_panier.style.border = '5px grey solid'

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

                //Ajout d'un lien sur l'image --> pour plus grand
            const aTeddiesImage = document.createElement("a")
            aTeddiesImage.href = lang.index.link+ID;
            aTeddiesImage.title = lang.panier.return;
            
            imageProduct.appendChild(aTeddiesImage);

                const img_Product = document.createElement("img");
                    img_Product.src = image;
                    img_Product.alt = description;
                    img_Product.classList.add("image_product");

                // Affichage de l'image
                aTeddiesImage.appendChild(img_Product);

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
                    name_title.id = ID;

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
                price_unite.textContent = lang.panier.priceUnit+price+" €";

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
                        display_color.textContent = lang.panier.color+color;

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
                        display_quantity.textContent = lang.panier.quantity+quantity+ " "+getQuantity(quantity);

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
                        subTotalValue = value[0]*value[3];
                        totalArrayCommand.push(subTotalValue)
                        numberOfItemsInPanier = totalArrayCommand.length;
                        display_SubTotal.textContent = lang.panier.subTotal+ subTotalValue +" €";

                        // Affichage du de le sous total
                        displaySubTotal.appendChild(display_SubTotal);

                    // Création de la colonne pour affichage de la description
                    const del_product = document.createElement("div");
                    del_product.id = "del_product"+i;
                    del_product.classList.add("col-md-6");
                        
                    // envoie de la colonne
                    subTotal_del.appendChild(del_product);

                        const display_del = document.createElement("button");
                        display_del.value = nameCookies;
                        display_del.title = lang.panier.del;
                        display_del.onclick = function () {
                            document.cookie = display_del.value + lang.panier.expiration;
                            location.reload(true);
                        }
                        // Affichage du de la couleur
                        del_product.appendChild(display_del);

                            const trash_i = document.createElement("i");
                            trash_i.classList.add("fas");
                            trash_i.classList.add("fa-trash-alt");
                            trash_i.value = nameCookies;
                            trash_i.style.color = "red";
                            
                            // Affichage du de la couleur
                            display_del.appendChild(trash_i);       
        }
        // fin du "for" pour l'affichage dynamique de mes articles
        
        // Affichage du prix total de la commande
        
        let panierTotal = document.getElementById("panier_total");
        panierTotal.classList.add("text-center");
        panierTotal.classList.add("col-md-12");
        const reducer = (accumulator, currentValue) => accumulator + currentValue;  
        let totalCommand = totalArrayCommand.reduce(reducer);
        panierTotal.textContent = lang.panier.totalCommande + totalCommand+ " €";

        // Mise en place dbouton pour vider le panier
        let panierClear = document.getElementById("panier_clear");
        panierClear.style.top = "15%";
        panierClear.classList.add("validation");
        panierClear.classList.add("text-center");
        panierClear.classList.add("pull-down");
        const buttonClear = document.createElement("button"); 
        buttonClear.id = "buttonClear";
        buttonClear.title = lang.panier.emptyCart;
        buttonClear.textContent = lang.panier.emptyCart;
        buttonClear.style.textDecoration ="none";
        buttonClear.style.borderRadius = "20px"
        buttonClear.style.color = colorBlack;
        buttonClear.style.backgroundColor = colorGrey;
        buttonClear.onclick = 

        //efface tout les cookies donc efface le panier 
        function () {
            for (let i = 0; i < getAllCookiesOK.length; i++) {
                let firstSplit = getAllCookiesOK[i].split('=');
                document.cookie = firstSplit[0] +lang.panier.expiration;
                location.reload(true);
            }
        }

        const ibuttonClear = document.createElement("i")
        ibuttonClear.classList.add("fas");
        ibuttonClear.classList.add("fa-trash-alt");
        ibuttonClear.style.color = "red"
        
        // Affichage du boutton pour vider le panier
        panierClear.appendChild(buttonClear);
        buttonClear.appendChild(ibuttonClear);
        
        let button_valid = document.getElementById("validCommand")
        buttonValid = document.createElement("button"); 
        buttonValid.id = "buttonClear";
        buttonValid.title = "Validée la Commande";
        buttonValid.textContent = "Validée la Commande";
        buttonValid.style.textDecoration ="none";
        buttonValid.style.borderRadius = "20px"
        buttonValid.style.color = colorBlack;
        buttonValid.style.backgroundColor = "cyan";
        buttonValid.onclick = 

        //
        function () {
            for (let i = 0; i < getAllCookiesOK.length; i++) {
                let SplitResult = getAllCookiesOK[i].split('=');
                SplitResult = SplitResult[0].split('||');
                Id = SplitResult[0].split(" ").join("")
                product_id.push(
                   Id
                );
            };
            sendResult.open("POST", urlDB);
            sendResult.setRequestHeader("Content-Type", "application/json");

            console.log("product_id",product_id);
            console.log("contact",contact);
            resultFinal.product_id = (product_id);
            resultFinal.contact = (contact);
            console.log("resultFinal",resultFinal);
            console.log("resultFinal.contact",resultFinal.contact);
            console.log("resultFinal.product_id",resultFinal.product_id);
            sendResult.send(resultFinal);
        };
        
        button_valid.appendChild(buttonValid);

        sendResult.addEventListener('readystatechange', function() {
            // if (sendResult.readyState === XMLHttpRequest.UNSENT) {                   0
            // console.log("UNSENT")
            // };
            // if (sendResult.readyState === XMLHttpRequest.OPENED) {                   1
            // console.log("OPENED")
            // };
            // if (sendResult.readyState === XMLHttpRequest.HEADERS_RECEIVED) {         2
            // console.log("HEADERS_RECEIVED")
            // };
            // if (sendResult.readyState === XMLHttpRequest.LOADING) {                  3
            // console.log("LOADING")       
            // };
            if (sendResult.readyState === XMLHttpRequest.DONE) {                     4
            console.log("DONE")
            };
            console.log("sendResult.status",sendResult.status)
            if (sendResult.readyState == 4 ){//&& (sendResult.status === 200 || sendResult.status === 0)) {
            var response = sendResult;
            console.log("response",response)
            
            eraseHtml('inner')
            var responsePanier = document.getElementById("inner");
                responsePanier.innerHTML += response.response;
            }
        });
    };
};