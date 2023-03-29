/*
FOR LOOP:

*/
console.clear();

for (let i = 0; i < 5; i++) {
    console.log(i); // prints 0-4
    console.log(`${i}`); // prints 0-4
}

const todos = [
    {
        id: 1,
        task: 'eat',
        isComplete: true
    },
    {
        id: 2,
        task: 'shopping',
        isComplete: true
    },
    {
        id: 3,
        task: 'take dog for a walk',
        isComplete: false
    }
]
console.log(todos);
console.log(todos[0]);
console.log(todos[0].task);  // "eat"

// print all of the tasks (only)
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].task);
    //"eat"
    //"shopping"
    //"take dog for a walk"

    console.log(todos[i].id);
    console.log(todos[i]);

}

//1. USING MAP
// Storing the tasks using map function

const map1 = todos.map(

    function tasks(eachTask) { // this returns only tasks
        return eachTask.task;
    }
)
console.log(map1); // ["eat", "shopping", "take dog for a walk"]

// 2. Using Map and Arrow Function
// eachItem means each obejct inside JSON data 
const map2 = todos.map(
    // eachItem -LOOP 1
    // [object Object] {
    //   id: 1,
    //   isComplete: true,
    //   task: "eat"
    // }

    // eachItem -LOOP 2
    //   [object Object] {
    //   id: 2,
    //   isComplete: true,
    //   task: "shopping"
    // }

    // eachItem -LOOP 3
    // [object Object] {
    //   id: 3,
    //   isComplete: false,
    //   task: "take dog for a walk"
    // }
    eachItem => eachItem.task
)
console.log(map2); // ["eat", "shopping", "take dog for a walk"]

// 3. FOR EACH 
// create an empty array
const taskArray = []
// USE FOR EACH LOOP
todos.forEach(
    eachItem => taskArray.push(eachItem.task)
)
console.log(taskArray); // ["eat", "shopping", "take dog for a walk"]


// In JS, maps are used more than for loops
// map() returns a new Array


