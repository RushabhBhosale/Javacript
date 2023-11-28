function outerFunction() {
   const name = "rushabh";
   function innerFunction() {
      return`Hello I'm ${name}..`;
   }
   return innerFunction;
} 

var result = outerFunction;
console.log(result())

Promise.resolve((data) => {
   console.log(data)
}).rejct((error) => {
   console.log(error)
})

console.log("start")

Promise.resolve().then(() => {
   console.log("promise")
})

console.log("end")




console.log("start")
setTimeout(() => {
   console.log("st")
},0)
Promise.resolve().then(() => {
   console.log("promise")
})
console.log("end")