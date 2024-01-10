"use strict";
// Declare Variable//
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const citySearch = document.getElementById("citySearch");
const cityData = document.getElementById("cityData");

let data = [];
let spreadArr;

// Get Data Function

async function getForecast(city="cairo") {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=d32b34b89d4d4310af822033240101&q=${city}&days=7`
  );
  if (response.ok == true) {
    const finalResponse = await response.json();
    data = finalResponse;
    spreadArr = data.forecast.forecastday;
    for (let i = 0; i < spreadArr.length; i++) {
    }
    displayForecast();
  }
}
getForecast(); 


// Display Data Function

function displayForecast() {
  let cols = `
    <div class="col-md-12 col-lg-6">
      <div class="card text-white mt-5">
          <div class="px-1 card-header mx-auto fs-5">
          <span class="me-5">${
            weekday[new Date(data.current.last_updated).getDay()]
          }</span>
          <span>${[new Date(data.current.last_updated).getDate()]}</span>
          <span>${months[new Date(data.current.last_updated).getMonth()]}</span>
        </div>
        <div class="card-body px-4 d-flex justify-content-between align-items-center">
          
          <div>
          <p><span class="pe-1">${data.location.name}</span>,<span>${
    data.location.country
  }</span></p>
          <h1 class"head_c">${Math.round(data.current.temp_c)}<sup>o</sup>C</h1>
          <h6>${data.current.condition.text}</h6>
          </div>
          <div class="con-icon text-center">
          <img src="${data.current.condition.icon}" class="text-center">
          </div>
          <div class=" d-flex flex-column">
          <span class="pb-1"><i class="fa-regular fa-sun text-warning pe-1"></i>  ${
            spreadArr[0].astro.sunrise
          }</span>
          <span class="pb-1 "><i class="fa-solid fa-moon pe-1"></i>  ${
            spreadArr[0].astro.sunset
          }</span>
          <span class="pb-1"><i class="fa-solid fa-cloud pe-1"></i> ${
            data.current.cloud
          } % </span>
          <span class="pb-1"><i class="fa-solid fa-wind pe-1"></i> ${Math.round(
            data.current.wind_kph
          )} KM/H</span>
          <span class="pb-1"><i class="fa-regular fa-compass pe-1"></i> ${
            data.current.wind_dir
          }</span>
          </div>
        </div>
      </div>
    </div>
  `;
  let cols_2 = `
  <div class="col-sm-12 col-md-12 col-lg-1">
    <div class="card text-white mt-5">
      <div class="card-header text-center">
      <span class="">${weekday[new Date(spreadArr[1].date).getDay()]}</span>
      </div>
      <div class="card-body text-center">
        <h5 class="py-4">H : ${Math.round(
          spreadArr[1].day.maxtemp_c
        )}<sup>o</sup>C</h5>
        <h5>L : ${Math.round(spreadArr[1].day.mintemp_c)}<sup>o</sup>C</h5>
        <img src="${spreadArr[1].day.condition.icon}">
      </div>
    </div>
  </div>
  `;
  let cols_3 = `
  <div class="col-sm-12 col-md-12 col-lg-1">
    <div class="card text-white mt-5">
      <div class="card-header text-center">
        <span class="">${weekday[new Date(spreadArr[2].date).getDay()]}</span>
      </div>
      <div class="card-body text-center">
        <h5 class="py-4">H : ${Math.round(
          spreadArr[2].day.maxtemp_c
        )}<sup>o</sup>C</h5>
        <h5>L : ${Math.round(spreadArr[2].day.mintemp_c)}<sup>o</sup>C</h5>
        <img src="${spreadArr[1].day.condition.icon}">
      </div>
    </div>
  </div>
  `;
  let cols_4 = `
  <div class="col-sm-12 col-md-12 col-lg-1">
    <div class="card text-white mt-5">
        <div class="text-center card-header">
        <span class="">${weekday[new Date(spreadArr[3].date).getDay()]}</span>
      </div>
      <div class="card-body text-center">
        <h5 class="py-4">H : ${Math.round(
          spreadArr[3].day.maxtemp_c
        )}<sup>o</sup>C</h5>
        <h5>L : ${Math.round(spreadArr[3].day.mintemp_c)}<sup>o</sup>C</h5>
        <img src="${spreadArr[3].day.condition.icon}">
      </div>
    </div>
  </div>
  `;
  let cols_5 = `
  <div class="col-sm-12 col-md-12 col-lg-1">
    <div class="card text-white mt-5">
      <div class="text-center card-header">
        <span class="">${weekday[new Date(spreadArr[4].date).getDay()]}</span>
      </div>
      <div class="card-body text-center">
        <h5 class="py-4">H : ${Math.round(
          spreadArr[4].day.maxtemp_c
        )}<sup>o</sup>C</h5>
        <h5>L : ${Math.round(spreadArr[4].day.mintemp_c)}<sup>o</sup>C</h5>
        <img src="${spreadArr[4].day.condition.icon}">
      </div>
    </div>
  </div>
  `;
  let cols_6 = `
    <div class="col-sm-12 col-md-12 col-lg-1">
      <div class="card text-white mt-5">
        <div class="text-center card-header">
          <span>${weekday[new Date(spreadArr[5].date).getDay()]}</span>
        </div>
        <div class="card-body text-center">
          <h5 class="py-4">H : ${Math.round(
            spreadArr[5].day.maxtemp_c
          )}<sup>o</sup>C</h5>
          <h5>L : ${Math.round(spreadArr[5].day.mintemp_c)}<sup>o</sup>C</h5>
          <img src="${spreadArr[5].day.condition.icon}">
        </div>
      </div>
    </div>
  `;
  let cols_7 = `
    <div class="col-sm-12 col-md-12 col-lg-1">
    <div class="card text-white mt-5">
    <div class="text-center card-header">
      <span>${weekday[new Date(spreadArr[6].date).getDay()]}</span>
    </div>
    <div class="card-body text-center">
      <h5 class="py-4">H : ${Math.round(
        spreadArr[6].day.maxtemp_c
      )}<sup>o</sup>C</h5>
      <h5>L : ${Math.round(spreadArr[6].day.mintemp_c)}<sup>o</sup>C</h5>
      <img src="${spreadArr[6].day.condition.icon}">
    </div>
    </div>
</div>
  `;
  document.getElementById("rowData").innerHTML =
  cols + cols_2 + cols_3 + cols_4 + cols_5 + cols_6 + cols_7;
}

//  Search City Name Event //
citySearch.addEventListener("keyup", function () {
  getForecast(citySearch.value);
});

// *********************************************************************
// Display Geo Location

async function getData(lat, long) {
  const promise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=d32b34b89d4d4310af822033240101&q=${lat},${long}`
  );
  return await promise.json();
}
async function gotLocation(position) {
  const result = await getData(
    position.coords.latitude,
    position.coords.longitude
  );
  // console.log(result);
  let currentCity = `
    <div class="col-md-12 col-lg-6">
      <div class="card text-white mt-5">
          <div class="px-1 card-header mx-auto fs-5">
          <span class="me-5">${
            weekday[new Date(result.current.last_updated).getDay()]
          }</span>
          <span>${[new Date(result.current.last_updated).getDate()]}</span>
          <span>${
            months[new Date(result.current.last_updated).getMonth()]
          }</span>
        </div>
        <div class="card-body px-4 d-flex justify-content-between align-items-center">

          <div>
          <p><span class="pe-1">${result.location.name}</span>,<span>${
              result.location.country
            }</span></p>
          <h1 class"head_c">${Math.round(
            result.current.temp_c
          )}<sup>o</sup>C</h1>
          <h6>${result.current.condition.text}</h6>
          </div>
          <div class="con-icon text-center">
          <img src="${result.current.condition.icon}" class="text-center">
          </div>

        </div>
      </div>
    </div>
  `;
  // document.getElementById("cityData").innerHTML = currentCity;
}
function failedToGet() {
  console.log("there is was issue");
}

//  Search Event to display current location//
window.addEventListener("load", async () => {
  navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
});