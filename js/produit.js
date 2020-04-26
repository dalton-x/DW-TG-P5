// Affectation de l'objet XMLHttpRequest
let requestProduct = new XMLHttpRequest();

// Recuperation des valeur dans l' URL
let IDproduct = $_GET('IDProduct');

// ouvre une nouvelle connexion en utilisant la méthode GET
requestProduct.open('GET', urlDB + IDproduct);

// charge les données de notre JSON récupéré
requestProduct.onload = function () {

    let teddiesChoice = JSON.parse(this.response);

    // declaration des variables de la page html
    let name = teddiesChoice.name;
    let description = teddiesChoice.description;
    let image = teddiesChoice.imageUrl;
    let price = teddiesChoice.price;

    //Mise en place du titre en H2
    let titleProduct = document.getElementById("title");
        const h2 = document.createElement("h2");
        h2.textContent = name;

        // Affichage du titre
        titleProduct.appendChild(h2);

    // Mise en place de la description de l article
    let titleDescProduct = document.getElementById("description");
        const ptitle = document.createElement("p");
        ptitle.textContent = lang.produit.titleDescription;

        // Affichage de la description
        titleDescProduct.appendChild(ptitle);
        
    // Mise en place de la description de l article
    let descProduct = document.getElementById("description");
        const p = document.createElement("p");
        p.textContent = description;

        // Affichage de la description
        descProduct.appendChild(p);

    // Mise en place du select du choix des couleurs de l'article
    let colorsProduct = document.getElementById("choiceColors");

        // creation des balises <BR>
        const br1  = document.createElement("br");
        const br2  = document.createElement("br");
        const br3  = document.createElement("br");
        const br4  = document.createElement("br");

        // Création du label pour le choix de la couleur
        const labelSelect = document.createElement("label")
        labelSelect.setAttribute("for","colors");
        labelSelect.textContent = lang.produit.choiceColor;
        
        // Affichage de la liste des couleurs
        colorsProduct.appendChild(labelSelect);

        colorsProduct.appendChild(br1);

        // Création du select pour le choix de la couleur
        let indexColor
        const select  = document.createElement("select");
        select.id = "colors";
        select.classList.add("select_produit");
        select.addEventListener("change",onChangeInput, true);
        select[select.options.length] = new Option("Couleur", "0");
        
        let colors = teddiesChoice.colors;
        colors.forEach(function (element, key) {
            for (let i = 0; i < colors.length; i++) {
                if (element == colors[i]) {
                    select[select.options.length] = new Option(element, element);
                }
            }
        });    

        // Affichage de la liste des couleurs
        colorsProduct.appendChild(select);
        colorsProduct.appendChild(br2);

        // Création du label pour la quantitée
        const labelInput = document.createElement("label")
        labelInput.setAttribute("for","quantity");
        labelInput.textContent = lang.produit.quantity;
        
        // Affichage du label de la quantitée
        colorsProduct.appendChild(labelInput);
        colorsProduct.appendChild(br3);

        let indexQuantity
        const input = document.createElement("input");
        input.type = "number";
        input.id = "quantity";
        input.value = 1;       
        input.classList.add("input_produit"); 
        input.addEventListener("change",onChangeInput, true)  
        input.setAttribute("min",1);
        input.setAttribute("max",200);
        
        
        function onChangeInput(){
            indexQuantity = document.getElementById("quantity").value;
            indexColor = document.getElementById("colors").value;
        }; 
                                
        // Affichage de l'input de la quantitée
        colorsProduct.appendChild(input);
        colorsProduct.appendChild(br4);

        // creation du lien pour le bouton
        const Validation = document.createElement("button")
        Validation.id = "button_Validate"
        Validation.textContent = lang.produit.buttonTitle;
        Validation.classList.add("col-lg-5");
        Validation.classList.add("validation");
        Validation.style.backgroundColor = "blue";
        Validation.style.top = "15%";
        Validation.style.color = "yellow";
                 
        // Affichage du boutton validé
        colorsProduct.appendChild(Validation);
        
        // Création du bouton validée avec ajout des cookies
        let validButton = document.getElementById("button_Validate")
        validButton.dataset.toggle = "modal";
        validButton.onclick = 
        function() {
            if (indexColor == null || indexColor == 0){
                alert(lang.produit.dontColor);
            }else{                
                var cookies = [indexQuantity,image,name,price,description];                   
                setCookie(IDproduct+'||'+indexColor,cookies,numDate);  
                window.location = lang.produit.location;                    
            }
        }
    // Mise en place du select du choix des couleurs de l'article
    let imageProduct = document.getElementById("image");
        
    //Ajout d'un lien sur l'image --> pour plus grand
    const aTeddiesImage = document.createElement("a")
    aTeddiesImage.href = teddiesChoice.imageUrl;
    aTeddiesImage.title = lang.produit.openBigSize;
    
    imageProduct.appendChild(aTeddiesImage);
    
    // ajout pour la balise image
    const imgProduct = document.createElement("img");
    imgProduct.src = image;
    imgProduct.alt = description;
    imgProduct.classList.add("image_product");
    
    // Affichage de l'image
    aTeddiesImage.appendChild(imgProduct);
}
// on envoie la requête
requestProduct.send()