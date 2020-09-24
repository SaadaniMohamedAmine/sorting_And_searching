//quicjSort in js
//the quick sort in js is based on :
//1-choosing a pivot (a number to consider like a reference 
//it can be the first element,the last element ,a random element
// or the medium element)
function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
    var pivot = array[0];
    var left = []; 
    var right = [];
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
    return quicksort(left).concat(pivot, quicksort(right));
  };
console.log(quicksort([3,4,5,2,1]));