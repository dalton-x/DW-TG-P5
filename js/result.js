if (window.location.pathname == '/result.html') {

    //recuperation du localStorage pour le total de la commande et du numero de la commande
    let localStorageOrderID = Object.keys(localStorage);
    orderid = localStorageOrderID[0];
    totalCommand = localStorage.getItem(localStorageOrderID[0])

    //Affichage des reponse du serveur
    let reponse_total = document.getElementById('result');
    const reponseTotal = document.createElement('div');
    reponseTotal.classList.add("col-md-12");
    reponseTotal.classList.add("text-center");
    reponseTotal.textContent = lang.result.totalCommande + totalCommand + lang.result.currency;
    // let reponse_orderID = document.getElementById('order_id');
    const reponseOrderID = document.createElement('div');
    reponseOrderID.classList.add("col-md-12");
    reponseOrderID.classList.add("text-center");
    reponseOrderID.textContent = lang.result.order + orderid //"votre numero de commande est le "//+order_id;


    const returnIndex = document.createElement("a");
    returnIndex.classList.add("col-md-12");
    returnIndex.classList.add("text-center");
    returnIndex.href = './index.html';
    returnIndex.textContent = lang.panier.return
    reponse_total.appendChild(reponseTotal);
    reponse_total.appendChild(reponseOrderID);
    reponse_total.appendChild(returnIndex);
    localStorage.clear();
}