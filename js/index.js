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
        teddieDiv.classList.add("col-xs-12");
        teddieDiv.classList.add("items_index");
        teddieDiv.style.borderRadius = "20px";
        teddieDiv.style.marginBottom = "2%";
        teddieDiv.style.padding = "2%";
        teddieDiv.id = "teddies"+i;

        // insertion de la DIV dans la page HTML
        parent.appendChild(teddieDiv);

        // Ajout du parent pour le HTML
        let parent2 = document.getElementById("teddies"+i);
        
        // Ajout de texte pour le nom de l' objet
        const teddieName = document.createElement("h2");
        teddieName.textContent = teddies[i].name;
        teddieName.classList.add("title_name");

        // Ajout de text pour le prix de l'article
        const teddiePrice = document.createElement("p");
        teddiePrice.textContent = lang.index.price + teddies[i].price + " €";

        //Ajout d'un lien sur l'image --> produit
        const aTeddiesImage = document.createElement("a")
        aTeddiesImage.href = lang.index.link+teddies[i]._id;

        // ajout pour la balise image
        const teddieImage = document.createElement("img");
        teddieImage.src = teddies[i].imageUrl;
        teddieImage.alt = teddies[i].description;
        teddieImage.title = teddies[i].name +" : "+ teddies[i].description;
        teddieImage.classList.add("image_index");

        // ajout pour la balise description
        const teddietitleDesc = document.createElement("p");
        teddietitleDesc.textContent += lang.index.desc;
        teddietitleDesc.classList.add("desc_index_title");

        // ajout pour la balise description
        const teddieDesc = document.createElement("p");
        teddieDesc.textContent += teddies[i].description;
        teddieDesc.classList.add("desc_index");

        // ajout pour la balise link
        const teddiebutton = document.createElement("button");
        teddiebutton.id = ('button_product')
        teddiebutton.style.backgroundColor = colorOrange;
        
            const teddielink = document.createElement("a")
            teddielink.href = lang.index.link+teddies[i]._id;
            teddielink.textContent = lang.index.fiche;
            teddielink.classList.add("link_index");
            teddielink.style.textDecoration = "none";
            teddielink.style.color = colorBlack;

        // ici ordre d'apparition sur la page web
        parent2.appendChild(teddieName)
        parent2.appendChild(aTeddiesImage)
        aTeddiesImage.appendChild(teddieImage)
        parent2.appendChild(teddietitleDesc)
        parent2.appendChild(teddieDesc)
        parent2.appendChild(teddiePrice)
        parent2.appendChild(teddiebutton)
        teddiebutton.appendChild(teddielink)
        

    }
}

// on envoie la requête
requestTeddies.send()