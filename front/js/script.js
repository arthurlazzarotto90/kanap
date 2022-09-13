
function kanap() {

    const section = document.getElementById('items')

    fetch('http://localhost:3000/api/products/')
    .then(res => res.json())
    .then(data =>  {
        for ( var i = 0; i < data.length; i++ ){
            let produit = document.createElement('a')
            let article = document.createElement('article')
            let image = document.createElement('img')
            let titre = document.createElement('h3')
            let para = document.createElement('p')

 
            section.append(produit)
            produit.append(article)
            article.append(image)
            article.append(titre) 
            article.append(para)

        
         

             let liste = data[i]._id

            produit.href="./product.html?id="+liste
            titre.textContent = data[i].name 
            para.textContent = data[i].description
            image.src = data[i].imageUrl
            

          
       
           console.log(data);
      
        }
    } )
   
}

kanap()



var produitEnregitre = JSON.parse(localStorage.getItem("Produ"));
console.log(produitEnregitre);

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