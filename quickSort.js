function quickSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let index = Math.round(nums.length / 2 - 1);
  let pivot = nums.splice(index, 1)[0];

  let x = nums.length;
  let i = 0;
  let leftSide = [];
  let rightSide = [];

  while (i < x) {
    let num = nums[i];
    if (num > pivot) {
      rightSide.push(num);
    } else {
      leftSide.push(num);
    }
    i ++;
  }
  debugger;

  return quickSort(leftSide).concat([pivot], quickSort(rightSide))
}
module.exports = quickSort;
// [2,3,1,100,4,101,13]
