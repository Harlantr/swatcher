'use strict';

angular.module('swatcher')
    .controller('colorCtrl', function ($scope, $routeParams, $location, $timeout) {

        $scope.$watch('redirectColor', function(newVal, oldVal) {
            if(newVal !== oldVal){
                var hex = newVal ? newVal : "#000000";
                $location.path( "/color/" + hex.substring(1));
            }            
        });

        $scope.$on('$routeChangeSuccess', function(next, current) {
            // Set new color
            var color = tinycolor($routeParams.hex);

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

            var r = $scope.currentColor.redValue
            var g = $scope.currentColor.greenValue
            var b = $scope.currentColor.blueValue

            //Create Shades
            var redShadeIncrement = r / 10;
            var greenShadeIncrement = g / 10;
            var blueShadeIncrement = b / 10;

            var ar_shades = [];
            for(var i=1; i<=10; i++){
                let newRed = r - (redShadeIncrement * i);
                let newGreen = g - (greenShadeIncrement * i);
                let newBlue = b - (blueShadeIncrement * i);

                let tmpColor = tinycolor({ r: newRed, g: newGreen, b: newBlue });
                ar_shades.push(tmpColor.toHex());
            }
            $scope.shades = ar_shades;

            //Create Tints
            var redTintIncrement = (255 - r) / 10;
            var greenTintIncrement = (255 - g) / 10;
            var blueTintIncrement = (255 - b) / 10;

            var ar_tints = [];
            for(var i=1; i<=10; i++){
                let newRed = r + (redTintIncrement * i);
                let newGreen = g + (greenTintIncrement * i);
                let newBlue = b + (blueTintIncrement * i);

                let tmpColor = tinycolor({ r: newRed, g: newGreen, b: newBlue });
                ar_tints.push(tmpColor.toHex());
            }
            $scope.tints = ar_tints;
        });
});
