//binarySearch in js
//the binarySearch consist on :
//Choosing a medium in the array (the item the middle)
//divide the main array on two array:one right of the midium 
//the other in the left of the midium 
//with arrow function 


let arr = [1, 3, 5, 7, 8, 9];
let binarySearch = (arr, x , strt, end) => {
  if(end < strt) return false;
  let mid = Math.floor((strt + end) / 2);
  if(arr[mid] === x) {
    return true;
  }
  if(arr[mid] < x) {
    return binarySearch(arr, x, mid+1, end);
  }
  if(arr[mid] > x) {
    return binarySearch(arr, x , strt, mid-1);
  }
}

let strt = 0, end = arr.length -1;
let bool = binarySearch(arr, 7, strt, end);
console.log(bool);
