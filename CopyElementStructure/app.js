
angular.module('app', []);

angular.module('app')
.service('GetData', function () {
  // the purpose of the program is to copy the elements from two into one
  var one = {
    "1": 1,
    "2": 1,
    "3": {
      "1": 1,
      "2": 1,
      "3": {
        "1": 1,
        "2": 1
      }
    }
  };

  var two = {
    "1": 2,
    "2": 2,
    "3": {
      "1": 2,
      "2": 2,
      "3": {
        "1": 2,
        "2": 2
      }
    }
  };

  // we need to keep the same object
  // but change the value
  var moveValueToObj = function (from, to) {
    for (var key in from) {
      if (typeof from[key] === 'object'){
        moveValueToObj(from[key], to[key]);
      } else{
        to[key] = from[key];
      }
    };
  };

  var getData = function(){
    return two
  };

  var changeData = function(){
    console.log(one);
    console.log(two);
    moveValueToObj(one, two);
    //two = one;
  };

  return {
    getData: getData,
    changeData: changeData
  }

});

angular.module('app')
.controller('BodyController', function ($scope, GetData) {
    $scope.data = GetData.getData();
    $scope.dataShorter = GetData.getData()["3"]["3"];
});

angular.module('app')
.controller('ChangeData', function ($scope, GetData) {
  $scope.change = function(){
    GetData.changeData();
  }
});
