"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const request = new XMLHttpRequest();
request.open("GET", `https://restcountries.eu/rest/v2/name/nigeria`);
request.send();
