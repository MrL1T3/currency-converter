// business logic
import 'bootstrap';

export default function getConversion(currency, handleResponse) {
  let request = new XMLHttpRequest();
  const url = 'https://v6.exchangerate-api.com/v6/0d88c95aa6b9b351c7b9b8f5/pair/USD/' + currency;

  request.addEventListener("loadend", function(){ 
    console.log("loadend evt listener");
    console.log(this.responseText);
    const response = JSON.parse(this.responseText)
    if (this.status === 200) {
      // printElements(response, currency);
      handleResponse(response.conversion_rate, currency);
    }
  });
  request.open('GET', url);
  request.send();
}


