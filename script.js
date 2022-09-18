'use strict';

const btn = document.querySelector('.btn-country');
const countryContainer = document.querySelector('.countries');
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data.languages);
    const html = `<article class="country">

  <img class="country_img" src="${data.flags.png}" alt="${
      data.flags['common']
    }'s flag" >
  <div class="country-data">
<h3 class="country_name">${data.name}</h3>
<h4 class="country-region">${data.region}</h4>
<p class="country_row"><span>👭</span>${(+data.population / 1000000).toFixed(
      1
    )} million people</p>
<p class="country_row"><span>🗣</span> ${data.languages[0].name} ${
      data.languages[1] ? ',' + data.languages[1].name : ''
    }</p>
<p class="country_row"><span>${data.currencies[0].symbol}</span> ${
      data.currencies[0].name
    }</p>



  </div>
</article>`;
    countryContainer.insertAdjacentHTML('beforeend', html);
    countryContainer.style.opacity = 1;
  });
};
getCountryData('thailand');
