/**
 * Initialize an Array
 * Array is Dynamic Array in JS.
 * We dont have to specify the size of the array.
 *
 * Array is equivaluet to ArrayList in Java
 */
function arrayInit() {
  const arr = [];
  console.log(typeof arr);
}

let arrayInitInAdv = () => {
  const list = ["Sunday", "Monday", "Tuesday"];
  const list1 = [1, 2, 3, 4, 5];

  const list2 = ["Sunday", 1, "Monday", 3.14];

  console.log(list, list1, list2);
};

/**
 * Add An Element in Array
 * push() => Adds an element at the end of the array
 */
let arrayAddOpration = () => {
  const list = ["A", "B", "C"];
  console.log("BEFORE", list);

  // Add :: End of the Arrray :: push()
  list.push("D");
  list.push("E");
  console.log("AFTER", list);

  // Add :: Begining of the array :: unshift()
  list.unshift("a");
  console.log("AT THE START OF ARR", list);

  // ADD :: INBETWEEN
  list.splice(3, 0, "b");

  console.log(list);
};

/**
 * Remove an element from Array
 */
let arrayRemoveOperation = () => {
  const list = ["A", "B", "C", "D", "E", "F", "G"];
  console.log("Before", list);

  // Remove from the end
  list.pop();
  console.log("FROM END", list);

  // Remove from the begingin
  list.shift();
  console.log("FROM START", list);

  // REMOVE :: INBETWEEN
  list.splice(1, 1);
  console.log("INBETWEEN", list);
};

/**
 * Sort  the array
 */
let arraySorting = () => {
  const list = [
    "Shubham",
    "Saurabh",
    "Nitin",
    "Kishore",
    "Ashwini",
    "Vaibhaw",
  ];

  console.log("Before", list);
  console.log("Array Lenght/Size", list.length);

  // Sort the Array
  list.sort();

  console.log("After", list);
  console.log("Array Lenght/Size", list.length);
};

/**
 * Reverse the array
 */
let arrayReverse = () => {
  const list = ["A", "B", "C", "D"];

  list.reverse();

  console.log(list);
};

/**
 * How to use for looop in Array
 */
let loopAnArray = () => {
  const list = ["A", "B", "C", "D", "E"];

  // Option 1
  console.log("Option 1");
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    console.log(item);
  }

  // Option 2 using of operato
  console.log("Option 2");
  for (let item of list) {
    console.log(item);
  }

  // Option 3
  console.log("Option 3");
  list.forEach((item) => {
    console.log(item);
  });

  // Different from Array :: Iterating an Object Property
  console.log("FOR IN OBJECT");
  let myobj = { id: 1, title: "Abcd", address: "Mumbai" };
  for (let key in myobj) {
    console.log(key, myobj[key]);
  }
};

/**
 * Map => Transform Each Element of an Array
 *
 * A, B, C, D, E
 * A1, B1, C1, D1, E1
 */
let arrayMapDemo = () => {
  const list = ["A", "B", "C", "D", "E"];
  console.log("Before", list);

  // Option1
  const list1 = list.map((item) => {
    return item + "1";
  });

  // Option 2 In one line
  const list2 = list.map((item) => item + "1");

  console.log("After", list1, list2);
};

arrayMapDemo();
