angular
.module("gifSearch")
.controller("gifCtrl",function($scope,gifService){
$scope.test="Get Giffed!";
$scope.getDataFromService = function(){
  gifService.getDataFromServer($scope.searchText)
  .then(function(getDataFromResponse){
    $scope.dataView = getDataFromResponse;
  })
}

});//gifCtrl END
