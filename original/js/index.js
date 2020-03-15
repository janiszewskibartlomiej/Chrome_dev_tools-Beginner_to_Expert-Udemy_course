

function getJson(url, onSuccessFunction, errorFunction){
  var request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
      onSuccessFunction(data)
    } else {
      errorFunction();

    }
  };

  request.onerror = function() {
    errorFunction();
  };

  request.send();
  
}


var generateButton = document.getElementById('generate');
var queryField = document.getElementById('query');
var results = document.getElementById('results');

generateButton.addEventListener('click', function(){
  var queryString = encodeURIComponent(queryField.value);
  getJson('https://api.cdnjs.com/libraries?search=' + queryString, function(json){
    results.innerText = JSON.stringify(json, null, 2);
    results.style.display = 'block';
  },
  function(){
    results.innerText = 'An error occurred with your search!';
    results.style.display = 'block';
  }); 
});