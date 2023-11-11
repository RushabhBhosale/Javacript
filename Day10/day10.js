// var myData = {
//     name: "rushabh",
//     age: 20,
//     degree: "BMM",
//     certification: ["fullstack", "digital marketing", 24, "google"]
// }

// console.log(myData.certification[3])

// var object = {}; 
// object["name"] = "rushabh";
// object["age"] = 24;

// console.log(object);

// Q  Given an array and Return only unique numbers . 

var numbers = [0, 1, 2, 3, 3, 4, 4, 0, 1, 2, 5, 6, 6, 5]

// answer - [0, 1, 2, 3, 4, 5, 6]

var box = {};

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] in box) {
        box[numbers[i]] += 1;
    } else {
        box[numbers[i]] = 1;
    }
}

console.log(Object.keys(box));

