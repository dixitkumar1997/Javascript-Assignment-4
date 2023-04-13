// Ques-1:- Write a function that takes in a number and returns a new array with all the prime numbers up to that number.
// Soln:- 


function prime(num){
    let arr=[];
    for(let i=1;i<=num;i++){
        let factors=0;
    for(let j=1;j<=i;j++){
        if(i%j==0){
            factors++;
        }
    }
    if(factors==2){
        arr.push(i)
    }
}
return arr;
}