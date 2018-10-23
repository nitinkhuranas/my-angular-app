var app = angular.module('myApp', []);

app.service('Data', function(){
    data =  {
        "a1": {
            "b1": {
                "c1": ["d11", "d12", "d13","d14"],
                "c2": ["d24", "d25", "d26"]
            },
            "b2": {
                "c2": ["d24", "d27", "d28","d29"],
                "c3": ["d34", "d37", "d38","d32"]
            },
            // "b3": null,
            // "b4": {}
        },
        "a2": {
            "b10": {
                "c10": ["d104", "d107", "d108","d102"],
                "c1": ["d14", "d17", "d19","d12"]
            },
            "b11": {
                "c11": ["d114", "d117", "d118","d112"],
                "c12": ["d124", "d127", "d128","d122"],
                "c13": ["d134", "d137", "d138","d132"]
            },
            "b14": {
                "c14": ["d144", "d147", "d148","d142"],
                "c15": []
            }
        }
    };

    var getParsedTableData = function(){
        var output = [];
        for(var l1 in data){
            for(var l2 in data[l1]){
                for(var l3 in data[l1][l2]){
                    for(var l4 in data[l1][l2][l3]){
                        var obj = {
                            "l1": l1,
                            "l2": l2,
                            "l3": l3,
                            "l4": data[l1][l2][l3][l4],
                            "desc": l1 + ", " + l2 + ", " + l3 + ", " + data[l1][l2][l3][l4],
                        }
                        output.push(obj);
                    }
                }
            }
        }
        return output;
    }
    
    return {
        getData: function(){
            return data;
        },
        getParsedTableData: getParsedTableData,
    }
})

app.controller('MyController', function($scope, Data) {
    $scope.data = Data.getData();;
    $scope.selectedVal4 = '';

    $scope.tableData = Data.getParsedTableData();

    $scope.$watch('selectedKey1', function(key) {
        $scope.selectedVal1 = $scope.data[key] || {};
        console.log("1",$scope.selectedVal1)
    });

    $scope.$watch('selectedKey2', function(key) {
        $scope.selectedVal2 = $scope.selectedVal1[key] || {};
        console.log("2",$scope.selectedVal2)
    });

    $scope.$watch('selectedKey3', function(key) {
        $scope.selectedVal3 = $scope.selectedVal2[key] || [];
        console.log("3", $scope.selectedVal3)
    });

});
