
fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => afficherPays(data));


// Afficher touts les pays 
const afficherPays = pays => {
    console.log(pays);

    const countryHtml = pays.map((element) => getPay(element));
    const container = document.querySelector("#row");

    container.innerHTML = countryHtml;
}

const getPay = (pays) => {
    console.log(pays);

    return  `
            <div class="col-md-3 p-0">
                <div class="card h-75 bg-color">
                  <img src="${pays.flags.svg}" class="card-img-top img border border-secondary" alt="img-card">
                  <div class="card-body">
                      <h1 class="fs-5 text-dark">Nom: <span>${pays.name.common}</span></h1>
                      <h4 class="fs-6 text-dark" >Capital: <span>${pays.capital}</span></h4>
                      <h4 class="fs-6 text-dark" >Region: <span>${pays.region}</span></h4>
                  </div>
               </div>
            </div>
    `
}

afficherPays();