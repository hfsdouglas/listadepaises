let dataCountries = fetch("https://restcountries.com/v2/all")
.then((response) => {
    response.json().then((countries) => {
        buildCards(countries);
    });
})

function buildCards(countries) {
    let cards = [];

    console.log(countries);

    countries.map((country) => {
        let card = `
        <li class="countryCard ${country.region}">
            <div id="countryCard__inner">
                <div id="countryCard__front"> 
                    <img id="countryCard__flag"src="${country.flags.png}" alt="${country.name}" />
                </div>
                <div id="countryCard__back">
                    <h3>${country.name}</h3>
                    <p>Nome nativo: ${country.nativeName}</p>
                    <p>Capital: ${country.capital}</p>
                    <p>Região: ${country.region}</p>
                    <p>Sub-região: ${country.subregion}</p>
                </div>
            </div>
        </li> 
        `
                    
        cards.push(card);
    })

    return document.querySelector(".countryList__ul").innerHTML = cards.join('');
}




