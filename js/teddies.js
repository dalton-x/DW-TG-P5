// variable pour affecter l'objet XMLHttpRequest
let requestTeddies = new XMLHttpRequest()

// ouvre une nouvelle connexion en utilisant la méthode GET
requestTeddies.open('GET', urlDB)

// charge les données de notre JSON récupéré
requestTeddies.onload = function () {
    let teddies = JSON.parse(this.response)

    for (let i = 0; i < teddies.length; i++) {

        // Ajout du parent pour le HTML
        let parent = document.getElementById("teddies");

        // Ajout d une div avec la class bootstrap
        const teddieDiv = document.createElement("div");
        teddieDiv.classList.add("col-lg-3");
        teddieDiv.classList.add("col-xs-5");
        teddieDiv.style.border = "1px solid black";
        teddieDiv.style.borderRadius = "20px";
        teddieDiv.id = "teddies"+i;

        // insertion de la DIV dans la page HTML
        parent.appendChild(teddieDiv);

        // Ajout du parent pour le HTML
        let parent2 = document.getElementById("teddies"+i);
        
        // Ajout de texte pour le nom de l' objet
        const teddieName = document.createElement("h2");
        teddieName.textContent = teddies[i].name;

        // Ajout de text pour le prix de l'article
        const teddiePrice = document.createElement("p");
        teddiePrice.textContent = "prix : " + teddies[i].price + " €";

        // ajout pour la balise image
        const teddieImage = document.createElement("img");
        teddieImage.src = teddies[i].imageUrl;
        teddieImage.alt = teddies[i].description;
        teddieImage.title = teddies[i].description;
        teddieImage.classList.add("grd-");
        teddieImage.classList.add("image");

        // ajout pour la balise description
        const teddietitleDesc = document.createElement("p");
        teddietitleDesc.textContent += "description du produit : ";

        // ajout pour la balise description
        const teddieDesc = document.createElement("p");
        teddieDesc.textContent += teddies[i].description;

        // ajout pour la balise link
        const teddielink = document.createElement("a");
        teddielink.href = "produit.html?IDProduct="+teddies[i]._id;
        teddielink.textContent = "Fiche produit";

        // ici ordre d'apparition sur la page web
        parent2.appendChild(teddieName)
        parent2.appendChild(teddieImage)
        parent2.appendChild(teddietitleDesc)
        parent2.appendChild(teddieDesc)
        parent2.appendChild(teddiePrice)
        parent2.appendChild(teddielink)

    }
}

// on envoie la requête
requestTeddies.send()