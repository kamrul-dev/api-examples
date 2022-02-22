
// load countries data
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();

// display countries
const displayCountries = countries => {
    /* for(const country of countries){
        console.log(country);
    } */
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `;
        /* const h3 = document.createElement('h3');
        h3.innerText = `Common Name: ${country.name.common} Official Name: ${country.name.official}`;
        console.log(country)
        div.appendChild(h3);

        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p); */
        countriesDiv.appendChild(div);
    });
}

// call dynamically by country name
const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDeatails(data[0]));
}

const displayCountryDeatails = country => {
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
        <h5>${country.name.common}</h5>
        <p>${country.population}</p>
        <img src="${country.flags.png}">
    `
}