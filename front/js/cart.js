var produitEnregitre = JSON.parse(localStorage.getItem("Produ"));


var tableProduct = produitEnregitre;

var eventListnerToAttach = []

function panier() {
  var img = document.querySelector('.cart__item__img');
  var titre = document.querySelector('.cart__item__content__description');
  for (var i = 0; i < tableProduct.length; i++) {
    //pour chaque élement de la liste 
    // 1- Créer la balise article
    var productArticle = document.createElement("article");
    document.querySelector("#cart__items").appendChild(productArticle);
    productArticle.setAttribute(
      "data-id", produitEnregitre[i].id_Pro
    );
    productArticle.className = "cart__item";

    //2 - création de la balise de l'image produit
    var divProductImage = document.createElement("div");
    divProductImage.className = "cart__item__img";
    productArticle.appendChild(divProductImage);
    var balProductImage = document.createElement("img");
    divProductImage.appendChild(balProductImage);

    balProductImage.src = produitEnregitre[i].images;
    //balProductImage.alt=produitEnregitre[i].altImgProduit ; 


    //3 - Créer la balise content
    var divProductContent = document.createElement("div");
    productArticle.appendChild(divProductContent);
    divProductContent.className = "cart__item__content";


    var divProductContentDescription = document.createElement("div");
    divProductContent.appendChild(divProductContentDescription);
    divProductContentDescription.className = "cart__item__content__description";


    // - Créer le h2 et les 2 balises P

    var balNomProduit = document.createElement("h2");
    divProductContentDescription.appendChild(balNomProduit);
    balNomProduit.innerHTML = tableProduct[i].nomProduit;

    var balCouleurProduit = document.createElement("p");
    divProductContentDescription.appendChild(balCouleurProduit);
    balCouleurProduit.innerHTML = tableProduct[i].coleurs;


     
    var balPrixProduit = document.createElement("p");
    divProductContentDescription.appendChild(balPrixProduit);
    balPrixProduit.innerHTML = tableProduct[i].Prix * tableProduct[i].Number + "€"; 

    balPrixProduit.id = "prie";
    

    var priPro = tableProduct[i].Prix * tableProduct[i].Number
 

    

    

    // cree les quantiter 
    var divProduitQuantiterInput = document.createElement("div");
    divProductContent.appendChild(divProduitQuantiterInput);
    divProduitQuantiterInput.className = "cart__item__content__settings";

    var divProductQuantitre = document.createElement('div');
    divProduitQuantiterInput.appendChild(divProductQuantitre);
    divProductQuantitre.className = "art__item__content__settings__quantity";

    var paraQuantiter = document.createElement("p");
    divProductQuantitre.appendChild(paraQuantiter);
    paraQuantiter.innerHTML = "Qté :" + tableProduct[i].Number ;

    //cree la supresion 

    var divSupresion = document.createElement('div');
    divProduitQuantiterInput.appendChild(divSupresion);
    divSupresion.className = "cart__item__content__settings__delete";

    var supresion = document.createElement('button');
    divSupresion.appendChild(supresion);
    supresion.innerHTML = "supresion";
    supresion.className = "deleteItem";
    supresion.id = produitEnregitre[i].id_Pro;
    eventListnerToAttach.push(supresion.id)
  }
}

//prix total

function recupePriex () {
  
 var table = []

 for (var i = 0; i < tableProduct.length; i++){
   var tablePrice = tableProduct[i].Prix * tableProduct[i].Number 
   table.push(Number(tablePrice))
   
  }


 const tableValue = 0;
 const tableInitial = table.reduce(
  (valeur, valeur2) => valeur + valeur2,
  tableValue
);

var priexTotal = document.getElementById('totalPrice')
priexTotal.append(tableInitial+'€')


}

recupePriex ()

const id_Pro = (id) => {
  var newTableProduct = tableProduct.filter(el => el.id_Pro != id)
  localStorage.setItem("Produ", JSON.stringify(newTableProduct));
  location.reload();
}


// total articule
var totalArticl_id = document.getElementById('totalQuantity');
var total = [];

for (var f = 0; f < tableProduct.length; f++) {
  var totalQuantity = tableProduct[f].Number;
  total.push(Number(totalQuantity));
}


var sum = 0;
for (var n = 0; n < total.length; n++) {
  sum += total[n];
}

totalArticl_id.textContent = sum;


//total panier


var id_numero = document.getElementById('numero')
var prixtable = [];



var price = 0;

for (var z = 0; z < prixtable.length; z++) {
  price += prixtable[z];
}



id_numero.textContent = sum + 'Panier';



panier();
eventListnerToAttach.forEach(
  id => {
    var supButton = document.getElementById(id);
    supButton.addEventListener('click', () => id_Pro(id));
  }
)



function resetStyle() {

  open("./confirmation.html")
  localStorage.clear();
  location.reload();
};
