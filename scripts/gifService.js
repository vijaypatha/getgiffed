angular
.module("gifSearch")
.service("gifService",function($http){
  this.getDataFromServer = function(searchTextFromView){
    var baseUrl = "http://api.giphy.com/v1/gifs/search?q="+searchTextFromView+"&api_key=dc6zaTOxFJmzC";
    return $http.get(baseUrl)
    .then(function(response){
      console.log(response);
      return response.data.data;
    })
  }

});//gifCtrl END
