var calculator = angular.module('Calculator', []);
calculator.controller('Calculator', function($scope, $http) {
    var numA, numB, operation;

    $scope.result = 0;
    $scope.calculation;

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
            var formData = {numA: numA, numB: numB};

            switch (operation)
            {
                case '+':
                    $http.post('http://gcm-calculator.herokuapp.com/add', formData)
                        .success(function(data) {
                            $scope.calculation = data;
                            $scope.result = data;
                            numA = data;
                            numB = undefined;
                            console.log(data);
                        })
                        .error(function(data) {
                            console.log('Error: ' + data);
                        });
                    break;
                case '/':
                    if (numB === '0')
                    {
                        $scope.resetOperation();
                        alert('Operação Inválida.');
                        break;
                    }
                    $http.post('http://gcm-calculator.herokuapp.com/div', formData)
                        .success(function(data) {
                            $scope.calculation = data;
                            $scope.result = data;
                            numA = data;
                            numB = undefined;
                            console.log(data);
                        })
                        .error(function(data) {
                            console.log('Error: ' + data);
                        });
                    break;
                case '*':
                    $http.post('http://gcm-calculator.herokuapp.com/mult', formData)
                        .success(function(data) {
                            $scope.calculation = data;
                            $scope.result = data;
                            numA = data;
                            numB = undefined;
                            console.log(data);
                        })
                        .error(function(data) {
                            console.log('Error: ' + data);
                        });
                    break;
                case '-':
                    $http.post('http://gcm-calculator.herokuapp.com/sub', formData)
                        .success(function(data) {
                            $scope.calculation = data;
                            $scope.result = data;
                            numA = data;
                            numB = undefined;
                            console.log(data);
                        })
                        .error(function(data) {
                            console.log('Error: ' + data);
                        });
                    break;
            }

            if ($scope.calculation !== undefined)
            {
                operation = undefined;
                numB = undefined;
                numA = $scope.calculation;
                $scope.result = $scope.calculation;
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