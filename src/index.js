// import 'conversion.js';
import getConversion from "./conversion";

console.log("Loaded index.js");

function handleConversionResponse(conversion_rate, currency) {
  printElements(conversion_rate, currency);
}
  
function printElements(conversion_rate, currency) {
  document.querySelector('#showResponse').innerText = `The conversion of USD to ${currency} is ${conversion_rate}.`;
}


function handleFormSubmission(event) {
  event.preventDefault();
  const city = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  getWeather(city);
}

window.addEventListener("load", function() {
  let formElem = document.querySelector('form');
  if(formElem) {
    formElem.addEventListener("submit", handleFormSubmission);
  } else {
    console.log("Could not find form element.")
  }

  console.log("Requesting conversion rate");
  getConversion('EUR', handleConversionResponse);
});
