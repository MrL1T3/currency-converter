import convertHandler from "./conversion";

function printElements(conversion_rate, currency) {
  const inputCash = document.querySelector('#starting-money').value;
  const finalValue = inputCash * conversion_rate;
  document.querySelector('#showResponse').innerText = "The conversion of " + inputCash + " USD to " + currency + " is " + finalValue.toFixed(2);
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
  }
  const convertButton = this.document.getElementById('convert-button');
  const currencyCode = document.getElementById('currency-code');
  convertButton.addEventListener("click", function() {
    convertHandler.getConversion(currencyCode.value, printElements);
  });
});