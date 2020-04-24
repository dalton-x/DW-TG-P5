// Affectation de l'objet XMLHttpRequest
let requestProduct = new XMLHttpRequest();

// Recuperation des valeur dans l' URL
let IDproduct = $_GET('IDProduct');

// ouvre une nouvelle connexion en utilisant la méthode GET
requestProduct.open('GET', urlDB + IDproduct);

function setCookie(nom, valeur, expire, chemin, domaine, securite){
    document.cookie = nom + ' = ' + escape(valeur) + '  ' +
                    ((expire == undefined) ? '' : ('; expires = ' + expire.toGMTString())) +
                    ((chemin == undefined) ? '' : ('; path = ' + chemin)) +
                    ((domaine == undefined) ? '' : ('; domain = ' + domaine)) +
                    ((securite == true) ? '; secure' : '');
}

// charge les données de notre JSON récupéré
requestProduct.onload = function () {

    let teddiesChoice = JSON.parse(this.response);

    // declaration des variables de la page html
    let name = teddiesChoice.name;
    let description = teddiesChoice.description;
    let image = teddiesChoice.imageUrl;

    //Mise en place du titre en H2
    let titleProduct = document.getElementById("title");
        const h2 = document.createElement("h2");
        h2.textContent = name;

        // Affichage du titre
        titleProduct.appendChild(h2);

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
        labelSelect.textContent = "Choix de la couleur :";
        
        // Affichage de la liste des couleurs
        colorsProduct.appendChild(labelSelect);

        colorsProduct.appendChild(br1);

        // Création du select pour le choix de la couleur
        const select  = document.createElement("select");
        select.id = "colors";
        select.addEventListener("change",onChangeSelect, true)        
        select[select.options.length] = new Option("Couleur", "0");
        
        let colors = teddiesChoice.colors;
        colors.forEach(function (element, key) {
            for (let i = 0; i < colors.length; i++) {
                if (element == colors[i]) {
                    select[select.options.length] = new Option(element, element);
                }
            }
        });

        let indexColor
        function onChangeSelect(){
            let val = document.getElementById("colors").value;
            indexColor = val;
        };      

        // Affichage de la liste des couleurs
        colorsProduct.appendChild(select);
        colorsProduct.appendChild(br2);

        // Création du label pour la quantitée
        const labelInput = document.createElement("label")
        labelInput.setAttribute("for","quantity");
        labelInput.textContent = "Quantitée :";
        
        // Affichage du label de la quantitée
        colorsProduct.appendChild(labelInput);
        colorsProduct.appendChild(br3);

        let indexQuantity
        const input = document.createElement("input");
        input.type = "number";
        input.id = "quantity";
        input.value = indexQuantity;        
        select.addEventListener("change",onChangeInput, true)  
        input.setAttribute("min",1);
        input.setAttribute("max",200);

        function onChangeInput(){
            let val = document.getElementById("quantity").value;
            indexQuantity = val;
        }; 
                                
        // Affichage de l'input de la quantitée
        colorsProduct.appendChild(input);
        colorsProduct.appendChild(br4);

        // creation du lien pour le bouton
        const Validation = document.createElement("a")
        Validation.id = "button_Validate"
        Validation.title = "Validée";
        Validation.textContent = "Validé l'article";
        Validation.classList.add("col-lg-5");
        Validation.classList.add("validation");
        Validation.style.backgroundColor = "blue";
        Validation.style.top = "15%";
        Validation.style.color = "yellow";
                 
        // Affichage du boutton validé
        colorsProduct.appendChild(Validation);

        let validButton = document.getElementById("button_Validate")
        validButton.onclick = function() {
            if (indexColor == null){
                alert("Vous avez pas choisit votre couleur");
            }else{
                if (confirm("Vous allez commander "+indexQuantity+" "+name+" avec la couleur "+indexColor+" .")){
                    var cookies = [IDproduct,indexColor,indexQuantity]
                    setCookie('cookies',cookies);  
                    window.location = "./panier.htmlIDProduct="+IDProduct 
                }

            
            }
        
        }

        

    // Mise en place du select du choix des couleurs de l'article
    let imageProduct = document.getElementById("image");
        
    // ajout pour la balise image
    const imgProduct = document.createElement("img");
    imgProduct.src = image;
    imgProduct.alt = description;
    imgProduct.classList.add("grd-");
    imgProduct.classList.add("image_product");
    
    // Affichage de l'image
    imageProduct.appendChild(imgProduct);
}
// on envoie la requête
requestProduct.send()