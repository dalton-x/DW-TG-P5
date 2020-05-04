// Test de la taille de l'ecran pour evité le probleme avec les trop petite resolution
if (screen.width >= widthRes) {
    fetch(urlDB)
        .then(response => response.json())
        .then(teddies => {

            for (let i = 0; i < teddies.length; i++) {

                // Ajout du parent pour le HTML
                let teddiesDiv = document.getElementById("teddies");

                // Ajout d une div avec la class bootstrap
                const teddieDiv = document.createElement("div");
                teddieDiv.classList.add("col-lg-3");
                teddieDiv.classList.add("col-xs-10");
                teddieDiv.classList.add("mb-5");
                teddieDiv.classList.add("items_index");
                teddieDiv.id = "teddies" + i;

                // insertion de la DIV dans la page HTML
                teddiesDiv.appendChild(teddieDiv);

                // Ajout du parent pour le HTML
                let teddiesI = document.getElementById("teddies" + i);

                // Ajout de texte pour le nom de l' objet
                const teddieName = document.createElement("h2");
                teddieName.textContent = teddies[i].name;
                teddieName.classList.add("title_name");

                // Ajout de text pour le prix de l'article
                const teddiePrice = document.createElement("p");
                teddiePrice.textContent = lang.index.price + teddies[i].price + " €";

                //Ajout d'un lien sur l'image --> produit
                const aTeddiesImage = document.createElement("a")
                aTeddiesImage.href = lang.index.link + teddies[i]._id;

                // ajout pour la balise image
                const teddieImage = document.createElement("img");
                teddieImage.src = teddies[i].imageUrl;
                teddieImage.alt = teddies[i].description;
                teddieImage.title = teddies[i].name + " : " + teddies[i].description;
                teddieImage.classList.add("image_index");

                // ajout pour la balise description
                const teddietitleDesc = document.createElement("p");
                teddietitleDesc.textContent += lang.index.desc;
                teddietitleDesc.classList.add("desc_index_title");

                // ajout pour la balise description
                const teddieDesc = document.createElement("p");
                teddieDesc.textContent += teddies[i].description;
                teddieDesc.classList.add("desc_index");

                // Creation du bouton fiche produit
                const teddiebutton = document.createElement("button");
                teddiebutton.id = ('button_product');
                teddiebutton.classList.add("button_product");

                const teddielink = document.createElement("a")
                teddielink.href = lang.index.link + teddies[i]._id;
                teddielink.textContent = lang.index.fiche;
                teddielink.classList.add("link_index");

                // ici ordre d'apparition sur la page web
                teddiesI.appendChild(teddieName)
                teddiesI.appendChild(aTeddiesImage)
                aTeddiesImage.appendChild(teddieImage)
                teddiesI.appendChild(teddietitleDesc)
                teddiesI.appendChild(teddieDesc)
                teddiesI.appendChild(teddiePrice)
                teddiesI.appendChild(teddiebutton)
                teddiebutton.appendChild(teddielink)
            };
        })
        .catch(error => console.error(error))
} else {
    alert(lang.index.alert)
    eraseHtml("resToLow")
    eraseHtml("panier_index")
    var emptyPanier = document.getElementById("resToLow");
        emptyPanier.innerHTML += lang.index.inner;
}