
var url = window.location.search;

var urlData = new URLSearchParams(url);
console.log(urlData);

var id = urlData.get('id');
console.log(id);



var titre = document.getElementById('title');
var image = document.querySelector('.item__img');
var prix = document.getElementById('price');
var description = document.getElementById('description');
var selection = document.getElementById('colors');
var imgProduit = document.createElement('img');
    
fetch('http://localhost:3000/api/products/'+id)
   .then(res => res.json())
   .then(data => {

    image.append(imgProduit);
 
    titre.textContent = data.name;
    description.textContent = data.description;
    imgProduit.src = data.imageUrl;
    prix.textContent = data.price;
    couleur = data.colors;

    for (var i = 0; i < couleur.length; i++){
    
      var optionColors = document.createElement('option') ;
      selection.append(optionColors);

      optionColors.text = couleur[i];
      optionColors.value = couleur[i];

      console.log(couleur[i]);

    }

  });

 function getNumber()
  {
   var seleclNumber = document.querySelector('input').value;
   return seleclNumber ;
  }

 function selecte()
  {
  var selecteOption = document.getElementById('colors').value;
  return   selecteOption;
  }


  var btn= document.getElementById('addToCart');



  btn.addEventListener("click", () => {
    location.reload();
     
    if (confirm( `${titre.textContent} "ajouté au panier"`)){

      var panierProduit = {
  
        id_Pro: id,
        nomProduit: titre.textContent,
        Prix: prix.textContent,
        coleurs: selecte(),
        Number: getNumber(),
        images:  imgProduit.src,
      };

       console.log(panierProduit);

       var produitEnregitre = JSON.parse(localStorage.getItem("Produ")); 
    
    function ajouté (){
      produitEnregitre.push(panierProduit) ;
      localStorage.setItem("Produ", JSON.stringify(produitEnregitre));
    }

    if(produitEnregitre){
    ajouté();
  
    }else{
      produitEnregitre = [];
     ajouté();

    }
    
  } else {
    
  }
  });


 

  var produitEnregitre = JSON.parse(localStorage.getItem("Produ"));

  var tableProduct = produitEnregitre;
  
  
  var id_numero = document.getElementById('numero')     
  var total = [];
  
  for( var f = 0; f < tableProduct.length; f++){
   
    var totalQuantity = tableProduct[f].Number;
     
    total.push(Number(totalQuantity));
    
      console.log(total);
  } 
  
  
  var  sum = 0 ;
  
  for(var n = 0; n < total.length; n++) {
    sum += total[n];
  
  }
  
  
   id_numero.textContent = sum + ' Panier'
