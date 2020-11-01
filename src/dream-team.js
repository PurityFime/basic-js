const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(/* members */) {
  if (Array.isArray(members)) {
    const strings = members.filter(member => typeof member === 'string');
    let arr = [];
    let newArray = [];
    let teamName;
    for (let name of strings) {
      arr = name.split('');
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
          arr.splice(i, 1)
          i--;
        }  
      }

      newArray.push(arr.join('').toUpperCase().split('')[0]);
    }
    return newArray.sort().join('').toUpperCase();
} else {
    return false;
  }

};
