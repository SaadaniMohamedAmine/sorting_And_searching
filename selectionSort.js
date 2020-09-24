//selectionSort js
//This method is based on searching the minimum
//and putting it at the beginning 
//everytime the minimum will be created  

function selectionSort(arr) {
    let n=arr.length;
    for(var i=0;i<n;i++) {
    let min_idx=i;
    for(var j=i+1;j<n;j++) {
        if(arr[j]<arr[min_idx]) {
            min_idx=j;
        }
    }
        let tmp=arr[min_idx];
        arr[min_idx]=arr[i];
        arr[i]=tmp;
    }
    return arr;
}
var array=[3,4,5,2,1,8,10];
var sortedArray=selectionSort(array);
console.log(sortedArray);