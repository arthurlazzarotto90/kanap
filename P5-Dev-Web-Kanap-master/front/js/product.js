

const url = window.location.search;

const urlData = new URLSearchParams(url);
console.log(urlData);

const id = urlData.get('id')
console.log(id);



const titre = document.getElementById('title')
const image = document.querySelector('.item__img')
const prix = document.getElementById('price')
const description = document.getElementById('description')
const selection = document.getElementById('colors')
    
fetch('http://localhost:3000/api/products/'+id)
   .then(res => res.json())
   .then(data => {

    const imgProduit = document.createElement('img')
   
    image.append(imgProduit)
 
    titre.textContent = data.name
    description.textContent = data.description
    imgProduit.src = data.imageUrl
    prix.textContent = data.price
    couleur = data.colors 

   
    for (var i = 0; i < couleur.length; i++){
    
      const optionColors = document.createElement('option') 
      selection.append(optionColors)

      optionColors.text = couleur[i]
      optionColors.value = couleur[i]

      console.log(couleur[i]);

     
    }
   

  })


  const btn = document.getElementById('addToCart')
 
  console.log(btn);


 function getNumber()
  {
   const seleclNumber = document.querySelector('input').value;
   return seleclNumber 
  }

 function selecte()
  {
  const selecteOption = document.getElementById('colors').value;
  return   selecteOption
  }




  const panierPro = btn.addEventListener("click", event => {
    alert('vouler vous se canape ' + titre.textContent )
   
   

    let panierProduit = {
  
     id_Pro: id,
     nomProdui: titre.textContent,
     Prix:  prix.textContent,
     coleurs: selecte(),
     Number: getNumber(),
     
    }
   

    
  
   console.log(panierProduit);
  })

 