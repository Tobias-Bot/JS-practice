/* #1 Reverse array without creating a new one */

let array = [1, 2, 3, 4, 5];
let len = array.length;

for (let i = 0; i < len / 2; i++) {
  let buf = array[i];
  array[i] = array[len - i - 1];
  array[len - i - 1] = buf;
}

/* #2 What is the output? */

let a = {
  name: "test",
};

let b = {
  name: "test",
};

/* 
a == b (false) and a === b (false). That's false because
a and b are sources, aren't values and they point on different
parts of memory and that's why they aren't equal
*/

/* #3 Will it change the value in the function? */

let s = "Hello";

const F = (a) => {
  a = "Hi";
};

F(s);

/* 
It won't change the value in the function, because
string type isn't referencial and arrays
and objects work the other way.
*/
