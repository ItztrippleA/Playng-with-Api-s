"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const renderCountry = function (data, className = ``) {
  const html = `
    <article class=${className}>
     <img class="country__img" src=${data.flag} />
     <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}<p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].symbol}</p>
     </div>
 </article>`;

  countriesContainer.insertAdjacentHTML(`beforeend`, html);
  countriesContainer.style.opacity = `1`;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText(`beforeend`, msg);
  countriesContainer.style.opacity = 1;
};

// const getCountryandNeighbor = function (country) {
//   //Ajax call
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);

//     // render first country
//     renderCountry(data);

//     //neighbour
//     const [neighbor] = data.borders;
//     if (!neighbor) return;

//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener(`load`, function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, `neighbour`);
//     });
//   });
// };
// getCountryandNeighbor(`nigeria`);
// getCountryandNeighbor(`usa`);
// getCountryandNeighbor(`china`);
// // getCountryandNeighbor(`uae`);

// const getJSON = function (url, errorMsg = `something went wrong `) {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg}(${response.status})`);
//     return response.json;
//   });
// };

// const getCountryData = function (country) {
//   const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => {
//       if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//       response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//       response.json();
//     })
//     .then((data2) => renderCountry(data2, `neighbour`))
//     .catch((err) => renderError(`something went wrong: ${err}`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     "Country not found"
//   )
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error("No neighbour found!");

//       // Country 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         "Country not found"
//       );
//     })

//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("portugal");
// });

//coding challenge

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
*/

// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// getPosition().then((pos) => console.log(pos));

//task one
// const whereAmI = function () {
//   getPosition()
//     .then((position) => {
//       console.log(position.coords);

//       const { latitude: lat, longitude: long } = position.coords;
//       //NOTE: Nigeria is not defined in this API🌚 🌚
//       return fetch(`https://geocode.xyz/${lat},${long}?geoit=json`);
//     })

//     .then((response) => {
//       //needed to catch the error beacause of the restriction of not more than 3 request per second
//       if (!response.ok)
//         throw new Error(`Problem with gecoding ${response.status}`);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`you are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.log(`${err.message}`));
// };

// btn.addEventListener("click", whereAmI);

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)\
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = async function (country) {
//   // Geolocation
//   const position = await getPosition();
//   const { latitude: lat, longitude: long } = position.coords;

//   // reverse geolocoding
//   const resGeo = await fetch(`https://geocode.xyz/${lat},${long}?geoit=json`);
//   const dataGeo = await resGeo.json();
//   console.log(dataGeo);

//   //country Data
//   const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
//   const data = await res.json();
//   renderCountry(data[0]);
// };

// // would have dynamically slected the users country from the geocode api, but there is no country data for some location.
// //so the country name has to be manually passed in
// whereAmI(`Nigeria`);

//this would only settles if all promises are settled
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const data = await Promise.all([
//       getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//     ]);
//     console.log(data);
//   } catch (err) {
//     console.error(`${err}`);
//   }
// };
// get3Countries(`portugal`, `canada`, `tanzania`);

//promise.race settles if one of the promisses settles

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/portugal`),
//     getJSON(`https://restcountries.eu/rest/v2/name/canada`),
//     getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
//   ]);
//   console.log(res[0]);
// })();

//promise.allsettled returns an aray of all the settled promises
//Other Promise Combinators: race, allSettled and any
// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long!"));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(5),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
]).then((res) => console.log(res));

Promise.all([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promise.any [ES2021]
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
