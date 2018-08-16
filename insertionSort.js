// InsertionSort Practice.
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function insertionSort(array) {
  for(let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log('Before Sort: ', array);
console.log('After Sort', insertionSort(array));