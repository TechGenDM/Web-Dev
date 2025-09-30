// // Arrays-> Special container to store multiple value of multiple datatypes. Elements are stord in structured manner.
// let arr = (10, 20, 30)        // valid
// let arr1 = new Array(1, 2, 3, 4)     // valid
// let elements = ["Priyanshi", 30, true, null]       // valid
// // Accesing elements: 
// console.log(arr[1]);      // 20
// console.log(arr[3]);       // undefined
// // Modify elements:
// arr[1] = "Krish";          // arr [10, Krish, 30]
// console.log(arr);
// arr[3] = 100;
// console.log(arr);




                                                           // Array methods
// Write a function that return sum of all elements
function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// max elements
function findMax(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
