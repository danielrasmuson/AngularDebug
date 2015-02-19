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
var moveValueToObj = function (from, to) {
  for (var key in from) {
    if (typeof from[key] === 'object'){
      moveValueToObj(from[key], to[key]);
    } else{
      to[key] = from[key];
    }
  };
  return to;
};

console.log(moveValueToObj(one, two));
