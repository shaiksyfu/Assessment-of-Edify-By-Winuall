function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  const arr1 = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArr1 = removeDuplicates(arr1);
  console.log(uniqueArr1);
  
  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  
  const arr2 = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArr2 = removeDuplicates(arr2);
  console.log(uniqueArr2);
  
  function removeDuplicates(arr) {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
      if (unique.indexOf(arr[i]) === -1) {
        unique.push(arr[i]);
      }
    }
    return unique;
  }
  
  const arr3 = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArr3 = removeDuplicates(arr3);
  console.log(uniqueArr3); 
  
  function removeDuplicates(arr) {
    return arr.reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);
  }
  
  const arr4 = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArr4 = removeDuplicates(arr4);
  console.log(uniqueArr4); 

  function removeDuplicates(arr) {
    const unique = [];
    arr.forEach((elem) => {
      if (!unique.includes(elem)) {
        unique.push(elem);
      }
    });
    return unique;
  }
  
  const arr5 = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArr5 = removeDuplicates(arr5);
  console.log(uniqueArr5); 
  
  const _ = require('underscore');
  const arr6 = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArr6 = _.uniq(arr6);
  console.log(uniqueArr6);