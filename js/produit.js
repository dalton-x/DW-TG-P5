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
        Validation.style.backgroundColor = colorOrange;
        Validation.style.top = "15%";
        Validation.style.color = colorBlack;
                 
        // Affichage du boutton validé
        colorsProduct.appendChild(Validation);

        //ajout infos dans le modal
        let infoModal = document.getElementById("returnProduct")
        info_modal = document.createElement("p");        
        
        
        // Création du bouton validée avec ajout des données
        let validButton = document.getElementById("button_Validate")
        validButton.dataset.toggle = "modal";
        validButton.onclick = 
        function() {
            if (indexColor == null || indexColor == 0){
                alert(lang.produit.dontColor);
            }else{
                validButton.dataset.target = "#ChoiceDest";          
                info_modal.textContent = lang.panier.modal_Dest_1+indexQuantity+" "+name+lang.panier.modal_Dest_2+indexColor+" .";
                var value = {
                    indexQuantity:indexQuantity,
                    image:image,
                    name:name,
                    price:price,
                    description:description};
                var IDColor = {
                    IDproduct:IDproduct,
                    indexColor:indexColor
                }
                localStorage.setItem(JSON.stringify([IDColor]),JSON.stringify([value]));
                //setCookie(IDproduct+'||'+indexColor,cookies,numDate);
            }
        }
        // Mise en place du select du choix des couleurs de l'article
        infoModal.appendChild(info_modal);

    let imageProduct = document.getElementById("image");    
    
    // ajout pour la balise image
    const imgProduct = document.createElement("img");
    imgProduct.src = image;
    imgProduct.alt = description;
    imgProduct.classList.add("image_product");    
    imgProduct.dataset.toggle = "modal";
    imgProduct.dataset.target = "#ChoiceImg"; 

        let returnImg = document.getElementById("returnImg"); 
        const return_Img = document.createElement("img");
        return_Img.src = image;
        return_Img.alt = description;
        return_Img.classList.add("image_product_modal");

        returnImg.appendChild(return_Img);

    // Affichage de l'image
    imageProduct.appendChild(imgProduct);
}
// on envoie la requête
requestProduct.send()