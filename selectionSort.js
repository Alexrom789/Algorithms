// SelectionSort Practice.
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array) {
  for(let i = 0; i < array.length; i++) {
      let min = i;
      for(let j = i + 1; j < array.length; j++) {
        if(array[j] < array[min]) {
          min = j;
        }
      }
      if(i !== min) {
        swap(array, i, min);
      }
  }
   return array;
}

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log('Before Sort: ', array);
console.log('After Sort', selectionSort(array));