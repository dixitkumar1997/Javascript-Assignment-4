// Ques-3:- Write a function that takes in an array of numbers and returns a new array with all the numbers sorted in ascending order.
// Soln:- 



function SortArray(arr){
    for(let i=0;i<arr.length;i++){
         for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let tmp=arr[i];
            arr[i]=arr[j];
            arr[j]=tmp;
        }
    }
}
return arr;
}