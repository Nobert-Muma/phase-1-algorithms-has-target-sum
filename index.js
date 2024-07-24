function hasTargetSum(array, target) {
  // Write your algorithm here
    // n iterations
  for(let i=0; i<array.length; i++){
      // n iterations
    for(let j=i+1; j<array.length; j++){
        // 1 step
      let sum=array[i]+array[j];
        // 1 step
      if(sum===target){
        return true;
      }
    }
  }
  return false;
}
console.log("=>true",hasTargetSum([3, 4, 5, 7, 9], 11));
console.log("=>true",hasTargetSum([3, 4, 5, 7, 9], 12));
console.log("=>true",hasTargetSum([3, 4, 5, 7, 9], 14));
console.log("=>true",hasTargetSum([3, 4, 5, 7, 9], 10));
console.log("=>false",hasTargetSum([3, 4, 5, 7, 9], 2));
console.log("=>false",hasTargetSum([3, 4, 5, 7, 9], 6));
console.log("=>false",hasTargetSum([3, 4, 5, 7, 9], 17));
console.log("=>false",hasTargetSum([3, 4, 5, 7, 9], 18));
console.log("=>false",hasTargetSum([3, 4, 5, 7, 9], 19));
/* 
  Write the Big O time complexity of your function here
    n*n+1+1
    O(n^2+2)
    O(n^2)
    quadratic time
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
