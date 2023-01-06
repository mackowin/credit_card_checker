// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Testing array
const test1 = [4, 7, 1, 6, 7, 3, 0, 1, 3, 5, 2, 8, 9, 5, 5, 0];
const test2 = [4, 4, 8, 5, 8, 0, 5, 7, 1, 7, 8, 9, 8, 6, 3, 7];
const test3 = [4, 0, 2, 4, 0, 0, 7, 1, 6, 4, 9, 5, 0, 8, 8, 3, 3, 7, 4];

const test4 = [6, 0, 1, 1, 4, 2, 9, 8, 8, 8, 8, 0, 2, 5, 5, 5];
const test5 = [3, 0, 2, 3, 6, 3, 3, 2, 2, 3, 0, 2, 9, 5];
const test6 = [3, 7, 7, 2, 1, 3, 0, 7, 8, 3, 3, 7, 0, 3, 1];

const test7 = [3, 6, 2, 2, 0, 0, 5, 4, 6, 6, 6, 3, 3, 6];
const test8 = [6, 7, 6, 2, 0, 7, 8, 3, 4, 2, 7, 8, 8, 5, 6, 0];
const test9 = [6, 3, 8, 9, 8, 8, 0, 3, 5, 0, 4, 5, 7, 2, 2, 5];

const batchTest = [test1, test2, test3, test4, test5, test6, test7, test8, test9];

// Add your functions below:

const validateCred = arr => {

  const newArr = arr.slice(0, arr.length-1).reverse();

  for (let i = 0; i < newArr.length; i++) {
    if(i % 2 === 0) {
      newArr[i] = newArr[i] * 2;
      if(newArr[i] > 9) {
        newArr[i] = newArr[i] -9;
      }
    } else {
      newArr[i] = newArr[i];
    }
  }

  const sumArray = newArr.reduce((prev, curr) => prev + curr) + arr[arr.length-1];

  if(sumArray % 10 === 0) {
    return true;
  } else {
    return false;
  }
};


const findInvalidCards = nestedArray =>  {
  const invalidArray = [];

  nestedArray.map(elem => {
    if(validateCred(elem) === false) { invalidArray.push(elem)}});

  /*for(let i = 0; i < nestedArray.length; i++){
    if(validateCred(nestedArray[i]) === false) {
      invalidArray.push(nestedArray[i]);
    }
  }*/

  return invalidArray;
}


const idInvalidCardCompanies = nestedArray => {

  const invalidCompanies = [];

  for(let i = 0; i < nestedArray.length; i++){
    if(nestedArray[i][0] === 3 && !invalidCompanies.includes('Amex')) {
        invalidCompanies.push('Amex');
    } else if (nestedArray[i][0] === 4 && !invalidCompanies.includes('Visa')) {
        invalidCompanies.push('Visa');
    } else if (nestedArray[i][0] === 5 && !invalidCompanies.includes('Mastercard')){
        invalidCompanies.push('Mastercard');
    } else if (nestedArray[i][0] === 6 && !invalidCompanies.includes('Discover')){
        invalidCompanies.push('Discover');
    } else if (!invalidCompanies.includes('Company not found')){
        invalidCompanies.push('Company not found');
    }
  };

  return invalidCompanies;
}


const convertToValidCard = arr => {

  const newArr = arr.slice(0, arr.length-1).reverse();

  for (let i = 0; i < newArr.length; i++) {
    if(i % 2 === 0) {
      newArr[i] = newArr[i] * 2;
      if(newArr[i] > 9) {
        newArr[i] = newArr[i] -9;
      }
    } else {
      newArr[i] = newArr[i];
    }
  }

  const sumArray = newArr.reduce((prev, curr) => prev + curr) + arr[arr.length-1];

  if(sumArray % 10 === 1) {
    if(arr[0] >= 1) {
      arr[0] = arr[0] - 1;
    } else {
      arr[0] = arr[0] + 9;
    }
  }

  if(sumArray % 10 === 2) {
    if(arr[0] >= 2) {
      arr[0] = arr[0] - 2;
    } else {
      arr[0] = arr[0] + 8;
    }
  }

  if(sumArray % 10 === 3) {
    if(arr[0] >= 3) {
      arr[0] = arr[0] - 3;
    } else {
      arr[0] = arr[0] + 7;
    }
  }

  if(sumArray % 10 === 4) {
    if(arr[0] >= 4) {
      arr[0] = arr[0] - 4;
    } else {
      arr[0] = arr[0] + 6;
    }
  }

  if(sumArray % 10 === 5) {
    if(arr[0] >= 5) {
      arr[0] = arr[0] - 5;
    } else {
      arr[0] = arr[0] + 5;
    }
  }

  if(sumArray % 10 === 6) {
    if(arr[0] >= 6) {
      arr[0] = arr[0] - 6;
    } else {
      arr[0] = arr[0] + 4;
    }
  }

  if(sumArray % 10 === 7) {
    if(arr[0] >= 7) {
      arr[0] = arr[0] - 7;
    } else {
      arr[0] = arr[0] + 3;
    }
  }

  if(sumArray % 10 === 8) {
    if(arr[0] >= 8) {
      arr[0] = arr[0] - 8;
    } else {
      arr[0] = arr[0] + 2;
    }
  }

  if(sumArray % 10 === 9) {
    if(arr[0] >= 9) {
      arr[0] = arr[0] - 9;
    } else {
      arr[0] = arr[0] + 1;
    }
  }

  return arr;
}

const convertStringToNumber = str => {
  const num = parseInt(str);
  return Array.from(String(num), Number);
}

console.log(convertStringToNumber('1234'));
