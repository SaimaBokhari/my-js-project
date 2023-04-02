console.clear();

/*
CONSTRUCTORS:
In JAVA, constructors are used to create an object
When we create an object, an empty constructor is called by default
And it initialises the object.

The logic in JS is the same as in Java
It's similar to the functions. 

*/

// Normal or regular function: camelCase .. returns an object
function carInfo(brand, model, year) {
    return {
        brand, model, year
    }
};

const carFunction = carInfo('Nissan', 'Rogue', 2021);
console.log(carFunction);

/*
[object Object] {
  brand: "Nissan",
  model: "Rogue",
  year: 2021
}
*/

console.log(carFunction.brand); // "Nissan"
console.log(carFunction.model); // "Rogue"
console.log(carFunction.year); // 2021

// CONSTRUCTOR: PascalCase

function CarInfo(brand, model, year) {
    // this keyword is areference to the object
    this.brand = brand;
    this.model = model;
    this.year = year;
}

const carConstructor = new CarInfo('Tesla', 'Model X', 2021);
console.log(carConstructor);

/*
[object Object] {
  brand: "Tesla",
  model: "Model X",
  year: 2021
}
*/

console.log(carConstructor.brand); // "Tesla"
console.log(carConstructor.model); // "Model X"
console.log(carConstructor.year);  // 2021

// EXAMPLE 2
// Create function
function areaOfCircle(r) {
    return {
        r,
        result() {
            console.log('Result: ')
        }
    }
}

const myCircleArea1 = areaOfCircle(7);
console.log(myCircleArea1);

// Create Constructor
function AreaOfCircle(r) {
    this.r = r;
    this.result = function () {
        console.log('Result: ')
    }
}
const myCircleArea2 = new AreaOfCircle(10);
console.log(myCircleArea2);

// 'new' keyword creates an empty obejct, then returns objects from the constructor 
// according to the given information in parameters
// 'new' keyword wraps the values of given function and return it as an object
// 'this' keyword serves as a reference to the given parameters

