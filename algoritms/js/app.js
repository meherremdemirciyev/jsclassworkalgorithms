

// task1

let arr = [15,16,78,524,3,56,524];

function FindIndex(x){
    let index = arr.indexOf(x);
    if (index === -1) {
        console.log('Duzgun deyer daxil et');
    }
    else{
        console.log(index);
    }
}

FindIndex(524);

//task2

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let odd = [];
// let even = [];

// function Return(arr){
//   for (let i=0; i<arr.length;i++){
//     if (arr[i] % 2 === 0){
//       even.push(arr[i]);
//     }
//     else {
//       odd.push(arr[i]);
//     }
//   }

//   console.log(even);
//   console.log(odd);
// }
// Return(arr);


//task 3--palindrome

// function isPal(str){
//     return str.split('').every((char,i) => {
//         return char === str[str.length-i-1];
//     })
// }

// console.log(isPal('aabbccbbaa')); 
// console.log(isPal('aabbccbba1')); 
