"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const htmlForm = document.forms[0];

const renderCountry = (data) => {
  const html = ` <article class="country">
    <img class="country__img" src="${data.flags.png}"/>
    <div class="country__data">
      <h3 class="country__name">${data.name.official} </h3>
      <h4 class="country__region">${data.continents}</h4>
      <p class="country__row"><span>👫</span>${Math.round(
        data.population / 1000000
      )} mln people</p>
      <p class="country__row"><span>📅</span>${data.startOfWeek} </p>
      <p class="country__row"><span>🗺</span><a href="${
        data.maps.googleMaps
      }">location</a></p>
    </div>
  </article>`;
  countriesContainer.innerHTML = html;
  countriesContainer.style.opacity = 1;
};

const renderError = (data) => {
  const html = `
  <article class="country">
  <div class="country__data">
    <h1 class="country__name">${data}</h1>
  </div>
</article>`;
  countriesContainer.innerHTML = html;
};

const getCountryDataFunc = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) {
      throw new Error(`Country not found (${res.status})`);
    }
    const data = await res.json();
    renderCountry(data[0]);
  } catch (err) {
    renderError(err.message);
  }
  countriesContainer.style.opacity = 1;
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const countrName = htmlForm["country"].value;
  if (!countrName) return;
  getCountryDataFunc(countrName);
});
