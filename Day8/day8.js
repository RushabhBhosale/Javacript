var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var target = 10

for (var i = 0; i < array.length - 2; i++) {
    for (var j = i + 1; j < array.length - 1; j++) {
        for (var k = j + 1; k < array.length; k++) {
            if (array[i] + array[j] + array[k] == target) {
                console.log([array[i], array[j], array[k]])
            }
        }
    }
}

function Even() {
    console.log("number is even");
}

function Odd () {
    console.log("number is odd")
}

var number = 1245

if (number % 2 == 0) {
    Even();
} else {
    Odd();
}

