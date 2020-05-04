if (window.location.pathname == '/result.html') {

    //recuperation du localStorage pour le total de la commande et du numero de la commande
    let localStorageOrderID = Object.keys(localStorage);
    orderid = localStorageOrderID[0];
    totalCommand = localStorage.getItem(localStorageOrderID[0])

    //Affichage des reponses du serveur
    // création du montant total de la commande
    let reponse_total = document.getElementById('result');
    const reponseTotal = document.createElement('div');
    reponseTotal.classList.add("col-md-12");
    reponseTotal.classList.add("text-center");
    reponseTotal.textContent = lang.result.totalCommande + totalCommand + lang.result.currency;
    
    // Affichage du montant total de la commande
    reponse_total.appendChild(reponseTotal);

    // creation du numero de la commande
    const reponseOrderID = document.createElement('div');
    reponseOrderID.classList.add("col-md-12");
    reponseOrderID.classList.add("text-center");
    reponseOrderID.textContent = lang.result.order + orderid

    // Affichage du numero de la commande
    reponse_total.appendChild(reponseOrderID);

    // creation du lien pour le retour aux produits
    const returnIndex = document.createElement("a");
    returnIndex.classList.add("col-md-12");
    returnIndex.classList.add("text-center");
    returnIndex.href = './index.html';
    returnIndex.textContent = lang.result.return

    // Affichage du lien pour le retour aux produits
    reponse_total.appendChild(returnIndex);

    // nettoyage du localStorage
    localStorage.clear();
}