//MergeSort practice
// Time Complexity: Best-O(n log n) Avg-O(n log n) Worse- O(n log n)
// Space Complexity: O(n)

function mergeSort (array) {
  //Base Case: array with single item.
  if (array.length === 1) {
    return array
  }

  //Get middle, left, and right of the array.
  const middle = Math.floor(array.length / 2); 
  const left = array.slice(0, middle); 
  const right = array.slice(middle); 

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log('Before Sort: ', array);
console.log('After Sort: ', mergeSort(array));