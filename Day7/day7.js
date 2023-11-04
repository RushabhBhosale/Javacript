// for (var i = 23; i <= 45; i ++) {
//     if(i % 2 != 0) {
//         console.log(i)
//     }
// }

// var count = 0;
// for (var i = 0; i <= 45; i++) {
//     if(i % 2 != 0) {
//         count++;
//     }
// }

// console.log(count)

// var oddCount = 0;
// var evenCount = 0;

// for (var i = 23; i <= 45; i++) {
//     if (i % 2 != 0) {
//         oddCount++;
//     } else {
//         evenCount++;
//     }
// }

// console.log(oddCount)
// console.log(evenCount)

// var oddNumbers = [];
// var evenNumbers = [];

// for (var i = 0; i <= 45; i++) {
//     if (i % 2 != 0) {
//         oddNumbers.push(i)
//     } else {
//         evenNumbers.push(i)
//     }
// }
// console.log(oddNumbers)
// console.log(evenNumbers)

// var array = [1, 2, 4, 5, 6, 7, 8, 23, 43, 65, 76, 24, 12, 34];

// var target = 29;

// var flag = false;

// for (var i = 0; i < array.length; i++) {
//     if (array[i] == target) {
//         console.log("found it")
//         flag = true;
//     }
// }

// if (flag == false) {
//     console.log("not found")
// }

var array = [1,2,3,45,5,6,7,1,34,5,5,6,56,677,6,7,6,5,6,67];

var target = 6;

for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] == target) {
            console.log(array[i], array[j])
        }
    }
}

