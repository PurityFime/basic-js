const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error;
  }
  else if (arr.length === 0) {
    return [];
  }
  else {
    let control = arr.find(str => typeof str === 'string');
    let initArray = arr.filter(num => typeof num !== '--double-next' && num !== '--discard-next' && num !== '--double-prev' && num !== '--discard-prev');
    let controlIdx = arr.indexOf(control);
    let resultArray =[];
    if (control === '--double-next') {
      initArray.forEach(function(num) {
        if (num !== initArray[controlIdx]) {
          resultArray.push(num)
        }
        else {
          resultArray.push(num);
          resultArray[controlIdx + 1] = num;
        }
        return resultArray;
      })
    } 
    else if (control === '--discard-next') {
      initArray.forEach(function(num) {
        if (num !== initArray[controlIdx]) {
          resultArray.push(num)
        }
        return resultArray;
  
      })
    }
    else if (control === '--double-prev') {
      initArray.forEach(function(num) {
        if (num !== initArray[controlIdx-1]) {
          resultArray.push(num);
        }
        else {
          resultArray.push(num);
          resultArray.push(num);
        }
        return resultArray;
      })
    }
    else if (control === '--discard-prev') {
      initArray.forEach(function(num) {
        if (num !== initArray[controlIdx-1]) {
          resultArray.push(num);
        }
        return resultArray;
      })
    }
  }
};
