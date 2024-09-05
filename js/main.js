let divData = document.getElementById("divData")
let divCards = document.getElementById("divCards")

function getData() {
    const promesa = fetch("https://freetestapi.com/api/v1/products", {method: "GET"})
    promesa.then((response)=> {
        response.json().then(
            (data)=>{
                console.log(data);
                createCards(data)   
            }) .catch((error)=> console.log("Problema con el Json", error))
    }) .catch((err)=>console.log("Existió un problema en la solicitud", err))
}//getData

function createCards(products) {
    console.log(products.length);
    console.log(products[0].name);
    //crear unaCard por cada producto con sus datos esenciales
    products.forEach((element) => {
        let card = `<div class="col">
              <div class="card">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.name}</h5>
                  <p class="card-text">${element.description}</p>
                </div>
                <div class="card-footer">
                  <small class="text-body-secondary">${"$"+element.price + " pesitos :)"}</small>
                </div>
              </div>
            </div>`

            divCards.insertAdjacentHTML("beforeend", card)
    });

}

getData()