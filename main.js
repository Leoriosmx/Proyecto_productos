let divData = document.getElementById("divData");

function getData() {
    const promesa = fetch("https://freetestapi.com/api/v1/products  ", { method: "GET" });
    promesa.then((response) => {
        response.json().then(
            (data) => {
                console.log(data);
                createCards(data);
            }).catch((error) => console.log("Problema con el json", error));
    }).catch((err) => console.log("Existió un problema con la solicitud.", err));
}//getData

function createCards(products) {
    console.log(products.lenght);
    products.forEach(p => {
        divData.insertAdjacentHTML("beforeend",
            `  <div class="card col">
                <img src="${p.image}" class="card-img-top" alt="${p.imagen}">
                    <div class="card-body">
                        <h5 class="card-title">${p.name}</h5>
                        <p class="card-text"><strong>${p.brand}</strong></p>
                        <p class="card-text">${p.description} </p>
                        <p class="card-text">${p.tating} </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>`
        )
    })
    //foreach ---name, descrption, image, price
}//createCards

//getData();









