// Write a function findMedianSortedArrays(arr1, arr2) that takes two sorted arrays arr1 and arr2 and returns the median oxf the combined sorted array. If the total length is even, return the average of the two middle numbers.

const testArr1 = [3, 6, 14, 7, 9, 12];
const testArr2 = [13, 15, 16, 27, 49, 52];

function findMedianSortedArrays(arr1, arr2) {
  const combinedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  console.log(combinedArray);

  if (combinedArray.length % 2 == 0) {
    // even lenth
    const midleIndex2 = combinedArray.length / 2;
    const middleIndex1 = combinedArray.length / 2 - 1;
    return (combinedArray[middleIndex1] + combinedArray[midleIndex2]) / 2;
  } else {
    const middleIndex = Math.floor(combinedArray.length / 2);
    return combinedArray[middleIndex];
  }
}
const median = findMedianSortedArrays(testArr2, testArr1);
console.log(median);
