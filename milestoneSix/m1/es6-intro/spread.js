const max = Math.max(6, 23, 45, 1, 89, 23);
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15]
const arrayMax = Math.max(...numbers);
// console.log(...numbers)
console.log(arrayMax)

// use spread operator to copy
const nums = [4, 5, 87, 9];
const nums2 = nums;
// nums2.push(12);
// console.log(nums); // when set value from one variable to another variable - non-primitive data type preserve the referrence
// console.log(nums2);
const nums3 = [...nums]
console.log(nums3);
nums.push(100)
console.log(nums3)
console.log(nums)

// advanced 
const sonkha = [...nums, 9999] // spread operator use to copy an array
console.log(sonkha);

// 30.7
 
