//bubbleSort js 
//this method i based on doing comparaison of eatch two adjacent items 
//and if the condition is true 
//then swapping them.
function bubbleSort (arr) {
    for(var i=0;i<arr.length;i++) 
      for(var j=0;j<arr.length;j++) {
           if(arr[j]>arr[j+1]) {
               let tmp=arr[j];
               arr[j]=arr[j+1];
               arr[j+1]=tmp;
           }
    }
    return arr;
}
var tab=[3,4,5,2,1,8,10];
tabSorted=bubbleSort(tab);
console.log(tabSorted);