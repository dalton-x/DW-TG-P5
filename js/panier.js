// Test de la taille de l'ecran pour evité le probleme avec les trop petite resolution
if (screen.width >= widthRes) {
    //Vérification que l'on est bien sur le panier
    if (window.location.pathname == '/panier.html') {
        // Si panier vide on efface la page html et on remplace par le inner
        if (localStorage.length === 0) {
            eraseHtml('inner')
            let emptyPanier = document.getElementById("inner");
            emptyPanier.innerHTML += lang.panier.inner;
            // si panier avec des objets
        } else {
            let keysLocalStorage = Object.keys(localStorage);
            for (let i = 0; i < keysLocalStorage.length; i++) {
                let ID_Color = JSON.parse(keysLocalStorage[i]);
                for (let i = 0; i < ID_Color.length; i++) {
                    ID = ID_Color[i].IDproduct;
                    color = ID_Color[i].indexColor;
                }
                let values = JSON.parse(localStorage.getItem(keysLocalStorage[i]));
                for (let i = 0; i < values.length; i++) {
                    quantity = values[i].indexQuantity;
                    image = values[i].image;
                    nameProduct = values[i].name;
                    price = values[i].price;
                    description = values[i].description;
                }

                // On crée une row par article
                let articlePanier = document.getElementById("article_panier")
                const product_panier = document.createElement("div");
                product_panier.id = "product_panier" + i;
                product_panier.classList.add("row");
                product_panier.classList.add("product_panier");
                product_panier.classList.add("mb-3");

                // On Insere la row dans la page HTML
                articlePanier.appendChild(product_panier);

                // On créé une div pour y mettre l'image
                let productPanier = document.getElementById("product_panier" + i);
                // Création de la div pour l'article
                const image_Panier = document.createElement("div");
                image_Panier.id = "panier_image" + i;
                image_Panier.classList.add("col-md-3");

                //On insere la div pour affiché l'image
                productPanier.appendChild(image_Panier);

                // ajout pour la balise image
                let imageProduct = document.getElementById("panier_image" + i);

                //Ajout d'un lien sur l'image --> pour plus grand
                const aTeddiesImage = document.createElement("a");
                aTeddiesImage.href = lang.index.link + ID;
                aTeddiesImage.title = lang.panier.return;

                imageProduct.appendChild(aTeddiesImage);

                const img_Product = document.createElement("img");
                img_Product.src = image;
                img_Product.alt = description;
                img_Product.classList.add("image_panier");

                // Affichage de l'image
                aTeddiesImage.appendChild(img_Product);

                // Création de la colonne pour affichage des infos du produit
                const info_Product = document.createElement("div");
                info_Product.id = "product_info" + i;
                info_Product.classList.add("col-md-9");

                // envoie de la colonne des infos
                productPanier.appendChild(info_Product);

                let namePrice = document.getElementById('product_info' + i)
                const name_Price = document.createElement("div");
                name_Price.id = "name_price" + i;
                name_Price.classList.add("row");

                // envoie de la colonne des infos
                namePrice.appendChild(name_Price);

                // Création de la colonne pour affichage des infos du produit
                const name_Product = document.createElement("div");
                name_Product.id = "name_product" + i;
                name_Product.classList.add("col-md-6");

                // envoie de la colonne des infos
                name_Price.appendChild(name_Product);

                //Mise en place du titre en H2
                let nameTitle = document.getElementById("name_product" + i);
                const name_title = document.createElement("h3");
                name_title.textContent = nameProduct;
                name_title.id = ID;

                // Affichage du titre
                nameTitle.appendChild(name_title);

                // Création de la colonne pour affichage des infos du produit
                const price_Product = document.createElement("div");
                price_Product.id = "price_Product" + i;
                price_Product.classList.add("col-md-6");

                // envoie de la colonne des infos
                name_Price.appendChild(price_Product);

                //Création de la balise <p> pour insere le prix
                const price_unite = document.createElement("p");
                price_unite.textContent = lang.panier.priceUnit + price + " €";

                // Affichage du prix
                price_Product.appendChild(price_unite);

                // Ajout de la ligne pour la description 
                let descriptionProduct = document.getElementById('product_info' + i);
                const desc = document.createElement("div");
                desc.id = "desc" + i;
                desc.classList.add("row");

                // envoie de la row
                descriptionProduct.appendChild(desc);

                // Création de la colonne pour affichage de la description
                const desc_product = document.createElement("div");
                desc_product.id = "desc_product" + i;
                desc_product.classList.add("col-md-12");

                // envoie de la colonne
                desc.appendChild(desc_product);

                //Création de la balise <p> pour insere la description
                let displayDesc = document.getElementById("desc_product" + i);
                const display_desc = document.createElement("p");
                display_desc.textContent = description;

                // Affichage du de la description
                displayDesc.appendChild(display_desc);

                // Ajout de la ligne pour la quantitée et la couleur
                let colorQuantity = document.getElementById('product_info' + i)
                const color_quantity = document.createElement("div")
                color_quantity.id = "color_quantity" + i;
                color_quantity.classList.add("row");

                // envoie de la row
                colorQuantity.appendChild(color_quantity);

                // Création de la colonne pour affichage de la couleur
                const color_product = document.createElement("div");
                color_product.id = "color_product" + i;
                color_product.classList.add("col-md-6");

                // envoie de la colonne
                color_quantity.appendChild(color_product);

                //Création de la balise <p> pour insere la couleur
                let displaycolor = document.getElementById("color_product" + i);
                const display_color = document.createElement("p");
                display_color.textContent = lang.panier.color + color;

                // Affichage du de la couleur
                displaycolor.appendChild(display_color);

                // Création de la colonne pour affichage de la couleur
                const quantity_product = document.createElement("div");
                quantity_product.id = "quantity_product" + i;
                quantity_product.classList.add("col-md-6");

                // envoie de la colonne
                color_quantity.appendChild(quantity_product);

                //Création de la balise <p> pour insere la couleur
                let displayquantity = document.getElementById("quantity_product" + i);
                const display_quantity = document.createElement("p");
                display_quantity.textContent = lang.panier.quantity + quantity + " " + getQuantity(quantity);

                // Affichage du de la couleur
                displayquantity.appendChild(display_quantity);

                // Ajout de la ligne pour le sous total 
                let subTotalDel = document.getElementById('product_info' + i);
                const subTotal_del = document.createElement("div");
                subTotal_del.id = "subTotal_del" + i;
                subTotal_del.classList.add("row");

                // envoie de la row
                subTotalDel.appendChild(subTotal_del);

                // Création de la colonne pour affichage du sous total
                const subTotal_product = document.createElement("div");
                subTotal_product.id = "subTotal_product" + i;
                subTotal_product.classList.add("col-md-6");

                // envoie de la colonne
                subTotal_del.appendChild(subTotal_product);

                //Création de la balise <p> pour insere le sous total
                let displaySubTotal = document.getElementById("subTotal_product" + i);
                const display_SubTotal = document.createElement("p");
                subTotalValue = price * quantity;
                totalArrayCommand.push(subTotalValue);
                //numberOfItemsInPanier = totalArrayCommand.length;
                display_SubTotal.textContent = lang.panier.subTotal + subTotalValue + " €";

                // Affichage du de le sous total
                displaySubTotal.appendChild(display_SubTotal);

                // Création de la colonne pour affichage de la description
                const del_product = document.createElement("div");
                del_product.id = "del_product" + i;
                del_product.classList.add("col-md-6");

                // envoie de la colonne
                subTotal_del.appendChild(del_product);


                const display_del = document.createElement("button");
                display_del.title = lang.panier.del;
                display_del.onclick = function () {
                    localStorage.removeItem(keysLocalStorage[i]);
                    location.reload(true);
                }
                // Affichage du de la couleur
                del_product.appendChild(display_del);

                const trash_i = document.createElement("i");
                trash_i.classList.add("fas");
                trash_i.classList.add("fa-trash-alt");

                // Affichage du de la couleur
                display_del.appendChild(trash_i);
                //remplissage de la table pour envoie aux serveur le panier            
                product_id.push(ID);
            }

            // fin du "for" pour l'affichage dynamique de mes articles

            // Affichage du prix total de la commande

            let panierTotal = document.getElementById("panier_total");
            panierTotal.classList.add("text-center");
            panierTotal.classList.add("col-md-12");
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            totalCommand = totalArrayCommand.reduce(reducer);
            panierTotal.textContent = lang.panier.totalCommande + totalCommand + " €";

            // Mise en place du bouton pour vider le panier
            let panierClear = document.getElementById("panier_clear");
            panierClear.classList.add("text-center");
            panierClear.classList.add("pull-down");
            const buttonClear = document.createElement("button");
            buttonClear.id = "buttonClear";
            buttonClear.title = lang.panier.emptyCart;
            buttonClear.textContent = lang.panier.emptyCart;
            buttonClear.onclick =
                //efface tout les localStorage donc efface le panier 
                function () {
                    localStorage.clear();
                    location.reload(true);
                }

            const ibuttonClear = document.createElement("i")
            ibuttonClear.classList.add("fas");
            ibuttonClear.classList.add("fa-trash-alt");

            // Affichage du boutton pour vider le panier
            panierClear.appendChild(buttonClear);
            buttonClear.appendChild(ibuttonClear);

            let button_valid = document.getElementById("validCommand")
            const buttonValid = document.createElement("button");
            buttonValid.dataset.toggle = "modal";
            buttonValid.id = "buttonValid";
            buttonValid.title = "Validée la Commande";
            buttonValid.textContent = lang.panier.valid;
            buttonValid.onclick =
                function () {
                    buttonValid.dataset.target = "#ChoiceDest";
                }

            //Affichage du bouton validée la commande
            button_valid.appendChild(buttonValid);

            let submit_Form = document.getElementById("submitForm");
            submitForm = document.createElement("button");
            submitForm.textContent = "VALIDER";
            submitForm.classList.add("btn");
            submitForm.classList.add("btn-warning");
            submitForm.type = "submit";
            submitForm.onclick =
                function () {
                    // Récuperation ds valeur du formulaire de contact
                    getValue()
                    if (contact != false) {
                        resultFinal = {
                            contact: contact,
                            products: product_id,
                        };
                        // on envoie au serveur l'objet de la commande via la méthode POST
                        fetch(urlDB + "order", {
                                method: "POST",
                                headers: new Headers({
                                    "Content-Type": "application/json"
                                }),
                                body: JSON.stringify(resultFinal)
                            })
                            .then(response => response.json())
                            .then(response => {
                                //recuperation du numero de commande dans la reponse du serveur
                                responseOrderID = response.orderId,
                                    //Supression du panier
                                    localStorage.clear();
                                //Création d'un nouvel localStorage pour affichage sur la page result
                                localStorage.setItem(responseOrderID, totalCommand);
                                //Affichage de la reponse server
                                window.location.href = './result.html';
                            })
                            .catch(error => console.error(error));
                    } else {
                        alert("Un champ est mal rempli")
                    };
                };
            submit_Form.appendChild(submitForm);
        };
    };
} else {
    eraseHtml("resToLow")
    let emptyPanier = document.getElementById("resToLow");
    emptyPanier.innerHTML += lang.index.inner;
}