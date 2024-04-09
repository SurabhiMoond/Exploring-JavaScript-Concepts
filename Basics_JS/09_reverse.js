/*Take a variable with a name, num and it should contain a 3-digit 
number of number data type and not string. Perform the following tasks:
Reverse the number by creating a reverse() function.
Check if the number after reversing is palindrome or not. 
*/
let num=121; 
console.log(reverse(num)===num);

function reverse(num){
let revResult=0;
while(num >0){
    let digit=num%10; 
    revResult=revResult*10+digit;
    num=Math.floor(num/10); 
}
return revResult;
}

/*digit revResult   num
    1   0*10+1=1   12
    2   1*10+2=12   1
    1   12*10+1=121  0>0 while false
*/