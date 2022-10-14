const numero = document.getElementById('orderId');

function numeroComende(max) {

    return Math.floor(Math.random() * max);


}

const creeNumero = document.createElement('p');

creeNumero.innerHTML = numeroComende(100000000000)

numero.appendChild(creeNumero);


function closes() {
   close("./confirmation.html")
   open("./index.html")
   localStorage.clear();
}

