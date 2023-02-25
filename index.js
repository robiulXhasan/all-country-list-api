// Load all country Data from api
const loadCountryData = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => getCountry(data));
};
// Get single country bt using for each loop 
const getCountry = (countries) => {
  countries.forEach((country) => setCountry(country));
};
// set country data to a cart
const setCountry = (country) => {
  console.log(country);
  const countryContainer = document.getElementById("country-container");
  const countryDiv = document.createElement("div");
  countryDiv.innerHTML = `
  
  <div style="min-height:300px" class="px-4 py-4 bg-purple-100 border-2 rounded-lg shadow-lg">
  <img style="height:150px" class="mb-2 mx-auto" src=${country.flags.png} />
  <h2 class="font-semibold">Country Name: ${country.name.common}</h2>
  <h3>Official Name: ${country.name.official}</h3>
  <h3>Capital: ${country.capital} </h3>
  <h3>Area: ${country.area}</h3>
  <h3>Population: ${country.population}</h3>
  </div>
   `;
  countryContainer.appendChild(countryDiv);
};

// load country data by taking value from user
const loadSearchCountry = () => {
  const searchField = document.getElementById("search-field");
  const name = searchField.value;
  searchField.value = "";
  const countryContainer = document.getElementById("country-container");
  countryContainer.innerHTML = "";
  //console.log(name);
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((res) => res.json())
    .then((data) => setCountry(data[0]));
};

loadCountryData("https://restcountries.com/v3.1/all");
