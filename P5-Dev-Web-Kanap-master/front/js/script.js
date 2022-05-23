
function kanap() {

    const section = document.getElementById('items')

    fetch('http://localhost:3000/api/products/')
    .then(res => res.json())
    .then(data =>  {
        for ( var i = 0; i < data.length; i++ ){
            const produit = document.createElement('a')
            const article = document.createElement('article')
            const image = document.createElement('img')
            const titre = document.createElement('h3')
            const para = document.createElement('p')

 
            section.append(produit)
            produit.append(article)
            article.append(image)
            article.append(titre) 
            article.append(para)

        
         

            const liste = data[i]._id

            produit.href="./product.html?id="+liste
            titre.textContent = data[i].name 
            para.textContent = data[i].description
            image.src = data[i].imageUrl
            

          
       
           console.log(data);
      
        }
    } )
   
}

kanap()




