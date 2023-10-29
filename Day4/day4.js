let userAge = 19

if (userAge > 19 && userAge < 90) {
    console.log('You can drive')
} else if (userAge < 19) {
    console.log('You are underage')
} else if (userAge > 90) {
    console.log('You are overage')
} else {
    console.log('you can have the ll')
}

let userName = "sur"

switch (userName) {
    case "surya":
        console.log('Player is Surya')
        break;
    case "rohit":
        console.log('Player is rohit')
        break;
    case "kohli":
        console.log('Player is kohli')
        break;
    case "Kl":
        console.log('Player is kl')
        break;
    default:
        console.log('No Player Name')
}


var myData
console.log(myData)

var myData = ["Rushabh", 1, 2, 0, 34, 5, 6]

console.log(myData.length)

console.log(myData[0])
console.log(myData[1])
console.log(myData[2])
console.log(myData[3])
console.log(myData[4])
console.log(myData[5])
console.log(myData[6])
console.log(myData[7])

console.log(myData)

myData.push("Bumrah")

console.log(myData)

myData.pop();

console.log(myData)