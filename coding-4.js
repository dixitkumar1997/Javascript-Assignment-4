// Ques-4:- Write a function that takes in an array of strings and returns a new array with all the strings sorted in alphabetical order.
// Soln:-


function SortStrings(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  