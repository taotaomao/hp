var ctrls= angular.module('ctrls',["dServices"]);
ctrls.controller('aboutUsCtrl',function($scope,aboutServices){
    $scope.emptList=aboutServices.aboutList;
});
ctrls.controller('newsCtrl',function($scope,newsListServices){
    $scope.newsList=newsListServices.newsList;
});
ctrls.controller('newsDetailCtrl',function( $scope,newsListDetailsServices, $state,$stateParams){
    var list = newsListDetailsServices.newsDetailsList[$stateParams.id];
    list.title = $stateParams.title;
    $scope.newsDetailList= list;

})
