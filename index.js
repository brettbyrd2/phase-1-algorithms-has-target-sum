function hasTargetSum(array, target) {
  let result = []
   for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++){
      if (array[j] === target - array[i]){
        result.push([array[i], array[j]])
        return true
      }
    }
  }
  return false
}   
  

  



/* 
  Write the Big O time complexity of your function here
  O(n*n)
*/

/* 
  Add your pseudocode here
  set up a function that returns true if any pair of numbers adds up to the target
  grab the first number in an array and look through the rest of the array for any number
  that adds up to target. If you find a number that adds up to the target return true and push
  those two numbers into a new array. Basically I want to iterate through the array and then for each element
  in the array I want to iterate through the array again to find any number that adds up to the target.
*/

/*
  Add written explanation of your solution here
Set up an empty array to the result variable then loop and begin to iterate through our array.

then make a second for loop and set the index variable j to i + 1

check to see if the element in the second loop is equal to the sum minus the element in the first loop.

if true, push the two numbers as a sub-array into the results array.

else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
