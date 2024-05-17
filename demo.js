// JSON object
const data = {
    "name": "John",
    "age": 22,
    "hobby": {
	"reading" : true,
	"gaming" : false,
	"sport" : "football"
    },
    "class" : ["JavaScript", "HTML", "CSS"]
}

// accessing JSON object
console.log(data.name); // John
console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

console.log(data.hobby.sport); // football
console.log(data.class[1]); // HTML


// code from https://www.programiz.com/javascript/json
const addNumbers = (a, b) =>  
   a + b;
  ;
  
  // Example usage:
  const result = addNumbers(5, 7);
  console.log(result); 