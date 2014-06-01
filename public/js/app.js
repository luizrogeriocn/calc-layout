var calculator = angular.module('Calculator', []);

calculator.controller('Calculator', function($scope) {
    var numA, numB, operation;

    $scope.result = 0;

    $scope.resetOperation = function() {
        $scope.result = 0;
        numA = undefined;
        numB = undefined;
        operation = undefined;
    };

    $scope.resetOperand = function() {

    };

    $scope.addNumber = function(number) {
        number = number.toString();

        if (operation === undefined)
        {
            if (numA === undefined)
            {
                numA = number;
            } else if($scope.result.length <= 7)
            {
                numA += number;
            }

            $scope.result = numA;
        } else
        {
            if (numB === undefined)
            {
                numB = number;
            } else if($scope.result.length <= 16)
            {
                numB += number;
            }
            $scope.result = numA.toString()+operation.toString()+numB.toString();
        }
    };

    $scope.calculate = function() {
        if (numA !== undefined && numB !== undefined)
        {
            var calculation;

            switch (operation)
            {
                case '+':
                    calculation = +numA + +numB; //chamada pra api
                    break;
                case '/':
                    if (numB === '0')
                    {
                        $scope.resetOperation();
                        alert('Operação Inválida.');
                        break;
                    }
                    calculation = +numA / +numB; //chamada pra api
                    break;
                case '*':
                    calculation = +numA * +numB; //chamada pra api
                    break;
                case '-':
                    calculation = +numA - +numB; //chamada pra api
                    break;
            }

            if (calculation !== undefined)
            {
                operation = undefined;
                numB = undefined;
                numA = calculation.toFixed(2);
                $scope.result = calculation.toFixed(2);
            }

        }
    };

    $scope.chooseOperation = function(operator) {
        if (operation === undefined && numA !== undefined)
        {
            operation = operator;
        }
    };
});