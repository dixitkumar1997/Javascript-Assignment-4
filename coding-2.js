// Ques-2:- Write a function that takes in a string and returns a new string with all the vowels removed.
// Soln:- 


function stringWithoutVowels(str){
    let new_str="";
    for (let i=0;i<str.length;i++){
       if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o"|| str[i]=="u"){
        continue;
       }
       else{
        new_str+= str[i];
       }
    }
    return new_str;
}