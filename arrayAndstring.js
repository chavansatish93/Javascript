let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
console.log(myArr.length);
myArr.pop();
myArr.push("harry")
myArr.shift()
const newLen = myArr.unshift("Harry")
console.log(newLen);
console.log(myArr);

// String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good Harry";
console.log(myLovelyString.length)
console.log(myLovelyString.indexOf("good"))
console.log(myLovelyString.lastIndexOf("good"))

console.log(myLovelyString.slice(1,4))
d = myLovelyString.replace("Harry", "Rohan");
d = d.replace("good", "bad");
console.log(d, myLovelyString)

let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());