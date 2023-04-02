console.clear();

/*
CONSTRUCTORS:
In JAVA, constructors are used to create an object
When we create an object, an empty constructor is called by default
And it initialises the object.

The logic in JS is the same as in Java
It's similar to the functions. 

*/

// Create a Person using constructor with 4 params
// Params: name, age, hasLicence, languages

// Name: Jim
// age: 20
// hasLicence: true
// languages: English, Spanish, German (ARRAY)

// Print all of the information one by one 

function Person(name, age, hasLicense, languages){
  this.name=name;
  this.age=age;
  this.hasLicense=hasLicense;
  this.languages=languages;
  
}

const personJim = new Person('Jim', 20, true, ["English", "Spanish", "German"]);
console.log(personJim);
/*
object Object] {
  age: 20,
  hasLicence: true,
  languages: ["English", "Spanish", "German"],
  name: "Jim"
}
*/

console.log(personJim.name); // "Jim"
console.log(personJim.age);  // 20
console.log(personJim.hasLicense); // true
console.log(personJim.languages); // ["English", "Spanish", "German"]
console.log(personJim.languages[1]); // "Spanish"

