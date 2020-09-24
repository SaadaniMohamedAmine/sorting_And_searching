//This searching is very simple and very easy to implement
//on this method,we have just to search an item on an array;
function linearSearch(elt,tab) {
    let res=-1;
    for(var i=0;i<tab.length;i++) {
        if(tab[i]==elt) {
            res=`Exist on position ${i}`;
        }
    }
    return res;
} 
var tab=[3,4,5,2,1];
linearSearch(5,tab);