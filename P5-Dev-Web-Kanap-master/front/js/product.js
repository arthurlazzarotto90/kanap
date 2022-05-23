

const url = window.location.search;

console.log(url);

const urlData = new URLSearchParams(url);
console.log(urlData);

const id = urlData.get('id')
console.log(id);



const titre = document.getElementById('title')
const image = document.querySelector('.item__img')
const prix = document.getElementById('price')
const description = document.getElementById('description')
const option = document.getElementById('colors')
    
fetch('http://localhost:3000/api/products/'+id)
   .then(res => res.json())
   .then(data => {

    const imgProduit = document.createElement('img')
   
    image.append(imgProduit)
 
    titre.textContent = data.name
    imgProduit.src = data.imageUrl
    prix.textContent = data.price


    const couleur = data.colors 

    for (var i = 0; i < couleur.length; i++){
      const optionColors = document.createElement('option') 
      option.append(optionColors)

      optionColors.text = couleur[i]
      optionColors.value = couleur[i]


       console.log(couleur[i]);
    }





   })
        
  



