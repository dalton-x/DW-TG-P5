if (window.location.pathname == '/result.html' ){
    reponse_total = document.getElementById('result');
        const reponseTotal = document.createElement('div');    
        reponseTotal.classList.add("col-md-12");
        reponseTotal.classList.add("text-center");
        reponseTotal.textContent = 'Votre commande d\'un montant total de : '+totalCommand+ ' €';
        //reponseTotal.textContent = lang.produit.buttonTitle;
    reponse_orderID = document.getElementById('order_id');
        const reponseOrderID = document.createElement('div');
        reponseOrderID.classList.add("col-md-12");
        reponseOrderID.classList.add("text-center");
        reponseOrderID.textContent = "La reponse du serveur "+response //"votre numero de commande est le "//+order_id;

    reponse_total.appendChild(reponseTotal);
    reponse_total.appendChild(reponseOrderID);
}