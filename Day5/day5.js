var letters = ["a", "b", "c", "d"]

letters.shift();
letters.shift();
letters.shift();
console.log(letters)
letters.unshift(49, 34);
console.log(letters)

for (var i = 1; i < 100; i += 10) {
    console.log(i)
}
for (var i = 100; i > 0; i -= 10) {
    console.log(i)
}