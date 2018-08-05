// Bubble Sort Practice.
// Time Complexity: Best-O(n) Avg-O(n^2) Worse- O(n^2)
// Space Complexity: O(1)

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array){
  let swapped;
    do {
        swapped = false;
        for (let i =0; i < array.length - 1; i++){
          if (array[i] > array[i + 1]){
              swap(array, i, i + 1);
              swapped = true;
          }
        }

    } while(swapped);
  return array;
}

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log('Before Sort: ', array);
console.log('After Sort', bubbleSort(array));