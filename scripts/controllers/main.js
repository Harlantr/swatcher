'use strict';

angular.module('swatcher')
    .controller('mainCtrl', function ($scope, $routeParams, $location) {

        $scope.$watch('newColor', function(newVal) {
            var hex = newVal ? newVal : "#000000"
            $location.path( "/color/" + hex.substring(1));
        });

        $scope.$on('$routeChangeSuccess', function(next, current) {
            setColor($scope, $location, "#" + $routeParams.hex);
        });
});

function setColor($scope, $location, hex){
    var color = tinycolor(hex);

    $scope.currentColor = {
        'hex': color.toHex(),
        'name': color.toName() ? color.toName() : '',
        'redPerc': color.toPercentageRgb().r,
        'greenPerc': color.toPercentageRgb().g,
        'bluePerc': color.toPercentageRgb().b,
        'redValue': color._r,
        'greenValue': color._g,
        'blueValue': color._b,
        'complement': color.complement().toHex(),
        'triad': color.triad().map(function(t) { return t.toHex(); }),
        'splitComplement': color.splitcomplement().map(function(t) { return t.toHex(); }),
        'analogous': color.analogous(3).map(function(t) { return t.toHex(); })
    };

    //Create Shades
    var ar_shades = [];
    for(var i=1; i<=10; i++){
        ar_shades.push(CreateShade(
            $scope.currentColor.redValue,
            $scope.currentColor.greenValue,
            $scope.currentColor.blueValue,
            i));
    }
    $scope.shades = ar_shades;

    //Create Tints
    var ar_tints = [];
    for(var i=1; i<=10; i++){
        ar_tints.push(CreateTint(
            $scope.currentColor.redValue,
            $scope.currentColor.greenValue,
            $scope.currentColor.blueValue,
            i));
    }
    $scope.tints = ar_tints;
}

function CreateShade(r, g, b, shadeNum){
    var redIncrement = r / 10;
    var greenIncrement = g / 10;
    var blueIncrement = b / 10;

    var newRed = r - (redIncrement * shadeNum);
    var newGreen = g - (greenIncrement * shadeNum);
    var newBlue = b - (blueIncrement * shadeNum);

    var color = tinycolor({ r: newRed, g: newGreen, b: newBlue });
    return color.toHex();
}

function CreateTint(r, g, b, tintNum){
    var redIncrement = (255 - r) / 10;
    var greenIncrement = (255 - g) / 10;
    var blueIncrement = (255 - b) / 10;

    var newRed = r + (redIncrement * tintNum);
    var newGreen = g + (greenIncrement * tintNum);
    var newBlue = b + (blueIncrement * tintNum);

    var color = tinycolor({ r: newRed, g: newGreen, b: newBlue });
    return color.toHex();
}