document.addEventListener("DOMContentLoaded", function() {
// Imagination!
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
  }).done(function (responseData) {
      for (var i = 0; i < responseData.candidates.length; i++) {
        var newLi = document.createElement('li');
        newLi.innerText = responseData.candidates[i].name + ' has ' + responseData.candidates[i].votes + ' votes ' ;
        $('#bikbot').append(newLi);
      }
  })
})
