
/**
 * Iterative Insertion Sort
 * Version 1
 * @param {array} array 
 * @returns {array} 
 */
const iterativeInsertionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }   
        }
    }
    return array;
};

/**
 * Swap Function
 * Scans an array from right to left, comparing adjacent elements and 
 * swapping them if the left element is greater than the right element
 * @param {array} array (unsorted/partially sorted array)
 * @param {number} position (current index (first iteration begins at the last index of array))
 * @param {number} value (current value of element at position (array[position]))
 */
const swap = (array, position, value) => {

    // The i iterator tracks the index of the element immediately adjacent (to the left) of the value
    let i = position - 1;
  
    // While i has not run the full length of the array AND the value at i is greater than the current value
    // Re-assign the element on the right with the element on the left
    // and decrement i so we move further (to the left) down the array
    while ((i >= 0) && (array[i] > value)) {
      array[i + 1] = array[i];
      i--;
    };
    
    // Re-assign the element on the right with the value param
    // because it is smaller than the value at array[i]
    array[i + 1] = value;
};

/**
 * Recursive Insertion Sort
 * @param {array} array (unsorted array)
 * @param {number} n (optional index to start sort) 
 */
const recursiveInsertionSort = (array, len) => {

    // Base case 1, len must always be the size of the array
    if (len === undefined) {
      len = array.length - 1; 
    }
    
    // Base case 2, exit the function once the we have scanned the whole array and len === 0
    if (len <= 0) {
      return;
    }

    // This recursive call constantly updates the value of n to move backwards through the array
    recursiveInsertionSort(array, len - 1);
    // This call makes swaps with the updated index length and the value at the end of the array
    swap(array, len, array[len]);
};

//---------------------------------------------------------------------------------------------------------//

let array2 = [4,1,-1,3,-10,4,5,6,2,3,4];
console.log('array after iterative sort: ', iterativeInsertionSort(array2))

let array1 = [4,1,-1,3,-10,4,5,6,2,3,4];

// we call the recursive function, but it doesn't return anything, it changes the array in place
recursiveInsertionSort(array1);

// console.log() the array after it has been altered to see the sorted result
console.log('array after recursive sort: ', array1);


