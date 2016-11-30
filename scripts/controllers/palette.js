'use strict';

angular.module('swatcher')
    .controller('paletteCtrl', function ($scope) {

    	$scope.paletteBackgroundColor1 = {"background-color": "#eeeeee"}
    	$scope.paletteBackgroundColor2 = {"background-color": "#dddddd"}
    	$scope.paletteBackgroundColor3 = {"background-color": "#cccccc"}
    	$scope.paletteBackgroundColor4 = {"background-color": "#bbbbbb"}
    	$scope.paletteBackgroundColor5 = {"background-color": "#aaaaaa"}

    	$scope.paletteColor1 = "#eeeeee"
    	$scope.paletteColor2 = "#dddddd"
    	$scope.paletteColor3 = "#cccccc"
    	$scope.paletteColor4 = "#bbbbbb"
    	$scope.paletteColor5 = "#aaaaaa"
});