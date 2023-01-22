// business logic
import 'bootstrap';

export default function getConversion(currency, handleResponse) {
  let request = new XMLHttpRequest();
  const url = "https://v6.exchangerate-api.com/v6/" + process.env.API_KEY + "/pair/USD/" + currency;

  request.addEventListener("loadend", function(){ 
    const response = JSON.parse(this.responseText)
    if (this.status === 200) {
      handleResponse(response.conversion_rate, currency);
    }
  });
  request.open('GET', url);
  request.send();
}

export function convertCash(dollars, convertRate) {
  convertedMoney = dollars * convertRate
  return convertedMoney
}