// business logic
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function getConversion(currency) {
  let request = new XMLHttpRequest();
  const url = 'https://v6.exchangerate-api.com/v6/0d88c95aa6b9b351c7b9b8f5/pair/USD/' + request;

  request.addEventListener("loadend", function(){ 
    const response = JSON.parse(this.responseText)
    if (this.status === 200) {
      printElements(response, currency);
    }
  });
}

function printElements(apiResponse, currency) {
  document.querySelector('#showResponse').innerText = 'The conversion of USD to ${currency} is ${apiResponse.conversion_rate}.';
}

function handleFormSubmission(event) {
  event.preventDefault();
  const city = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  getWeather(city);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});