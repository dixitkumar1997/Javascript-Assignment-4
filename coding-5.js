// Ques-5:-Write a function that takes in an array of objects and returns a new array with all the objects sorted by a specific property.
// Soln:-



function SortedObj(arr , propname){
    let new_arr1=[];
    let new_arr2=[];
    for(let i=0;i<arr.length;i++){
        for(let key in arr[i]){
            if(key==propname){
                new_arr1.push(arr[i]);
                break;
            }
            else{
                new_arr2.push(arr[i])
                break;
            }
        }
    }
    for(let j=0;j<new_arr2.length;j++){
        new_arr1.push(new_arr2[j]);
    }
    return new_arr1;
}