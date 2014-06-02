var calculator = angular.module('Calculator', []);
calculator.controller('Calculator', function($scope, $http) {
    var numA, numB, operation;
    
    var sendCalculationRequest = function(action, formData)
    {
        $http.post('http://gcm-calculator.herokuapp.com/'+action, formData)
                        .success(function(data) {
                            $scope.calculation = data;
                            $scope.result = data;
                            numA = data;
                            numB = undefined;
                            operation = undefined;
                            console.log(data);
                        })
                        .error(function(data) {
                            console.log('Error: ' + data);
                        });
    };

    $scope.result = 0;
    $scope.calculation;

    $scope.resetOperation = function() {
        $scope.result = 0;
        numA = undefined;
        numB = undefined;
        operation = undefined;
    };

    $scope.addNumber = function(number) {
        number = number.toString();

        if (!operation)
        {
            if (!numA)
            {
                numA = number;
            } else if($scope.result.length <= 7)
            {
                numA += number;
            }

            $scope.result = numA;
        } else
        {
            if (!numB)
            {
                numB = number;
            } else if($scope.result.length <= 16)
            {
                numB += number;
            }
            
            $scope.result = numA.toString() + operation.toString() + numB.toString();
        }
    };

    $scope.calculate = function() {
        if (numA && numB)
        {
            var formData = {numA: numA, numB: numB};

            switch (operation)
            {
                case '+':
                    sendCalculationRequest('add', formData);
                    break;
                case '/':
                    if (numB === '0')
                    {
                        $scope.resetOperation();
                        alert('Operação inválida.');
                        break;
                    }
                    sendCalculationRequest('div', formData);
                    break;
                case '*':
                    sendCalculationRequest('mult', formData);
                    break;
                case '-':
                    sendCalculationRequest('sub', formData);
                    break;
            }
        }
    };

    $scope.chooseOperation = function(operator) {
        if (!operation && numA)
        {
            operation = operator;
        }
    };
});