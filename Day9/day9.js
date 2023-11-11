// function add () {
//     var number1 = 10;
//     var number2 = 20;
//     console.log(number1 + number2)
// }

// add();


// function names (awdiz, institute) {
//     console.log(awdiz, institute)
// }

// names(25, 50);


// var array = [1, 2, 11, 3, 4, 5, 6, 7, 8, 9, 10];
// var target = 19;

// function findTarget (target, array) {
//     var flag = false;
//     for (var i = 0; i < array.length; i++) {
//         if(array[i] == target) {
//             console.log("We got it.")
//             flag = true
//         }
//     }
//     if (flag == false) {
//         console.log("Not Found")
//     }
// }
// findTarget(target,array);

// function one () {
//     console.log("first");
//     console.log("second")
//     return "Hiiiii"
// }

// one();

// function add(num1, num2) {
//     return num1 + num2
// }

// var answer = add(2, 3);
// console.log(answer)

// function test() {
//     console.log("Test 1")
//     return "hii" // end statement,, block stops
//     console.log("Test 2")
// }

// test()

// function findEven(num) {
//     if (num % 2 == 0) {
//         return "Number is Even"
//     } else {
//         return "Number is Odd"
//     }
    
// }
// console.log(findEven(23))

function Find(number) {
    if (number % 2 == 0) {
        return "Number even"
    }
    console.log("hiii")
    if (number > 10) {
        return "Number is graeter than 10"
    }
}

console.log(Find(18))
