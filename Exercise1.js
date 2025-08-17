var Myname = "Alexander";
console.log(Myname);

let age = "19";

const PI = 3.1416; 
console.log("PI =", PI);

age = 19; 
let isStudent = age < 25; 
console.log("Age:", age);
console.log("Is Student?", isStudent);
   
let person = {
    name: {
        first: "Alexander John", 
        last: "Hinayon",
        age: "19"    
    },
    address: {
        street: "Main Road Luzville",
        city: "Davao",
        country: "Philippines"
    },
    isStudent: true
};

console.log(person.name.first);  
console.log(person.name.last);
console.log(person.name.age);
console.log(person.address.street); 
console.log(person.address.city);
console.log(person.address.country); 

let colors = ["Blue", "Cyan", "Black", "Red", "Green"];
console.log(colors);

let words = ["Roblox", "Brainrot", "Rivals", "Nights"];
let transformedWords = [];

for (let i = 0; i < words.length; i++) {
    let reversedWord = "";
    
    for (let j = words[i].length - 1; j >= 0; j--) {
        reversedWord += words[i][j];
    }

    transformedWords.push(reversedWord.toUpperCase());
}

console.log(transformedWords);

let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let filteredNumbers = [];
let count = 0;

for (let num of numbers) {
    if (num % 2 === 0 && num > 20) {
        filteredNumbers.push(num);
        count++;
    }
}

console.log(`Found ${count} numbers: [${filteredNumbers.join(", ")}]`);