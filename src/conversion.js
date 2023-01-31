// business logic
import 'bootstrap';

export default class convertHandler {
  static getConversion(currency, handleResponse) {
    let request = new XMLHttpRequest();
    const url = "https://v6.exchangerate-api.com/v6/" + process.env.API_KEY + "/pair/USD/" + currency;

    request.addEventListener("loadend", function(){ 
      const response = JSON.parse(this.responseText)
      if (this.status === 200) {
        handleResponse(response.conversion_rate, currency);
      }
      else if (this.status === 400){
        document.querySelector('#error-zone').innerText = "400 error, bad API request"
      }
      else if (this.status === 401){
        document.querySelector('#error-zone').innerText = "401 error, unauthorized access"
      }
      else if (this.status === 403){
        document.querySelector('#error-zone').innerText = "403 error, forbidden to access"
      }
      else if (this.status === 404){
        document.querySelector('#error-zone').innerText = "400 error, resource cannot be found"
      }
      else if (this.status === 500){
        document.querySelector('#error-zone').innerText = "500 error, internal server issue"
      }
    });
    request.open('GET', url);
    request.send();
  }
}