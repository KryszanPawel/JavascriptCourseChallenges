const arr = [1, 2, 3, 4, 5];

arr.unshift(0);
arr.push(6);
arr.reverse();

console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
let arr3 = [...arr1.slice(0, arr1.length - 1), ...arr2];
arr3 = arr1.concat(arr2);
arr3.splice(4, 1);

console.log(arr3);
