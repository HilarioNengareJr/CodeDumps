// instantiating regEXP object
let pattern = /hello/;

let text = 'hello world';
console.log(pattern.test(text)); // Output: true
let pattern = /h.t/;
console.log(pattern.test('hat')); // Output: true
console.log(pattern.test('hot')); // Output: true
console.log(pattern.test('hut')); // Output: true

// [] encloses set of chars
let pattern = /[aeiou]/;
console.log(pattern.test('hello')); // Output: true
console.log(pattern.test('world')); // Output: false

// anchors
let pattern = /^hello/;
console.log(pattern.test('hello world')); // Output: true
console.log(pattern.test('world hello')); // Output: false

// quantifiers
let pattern = /ba+n/;
console.log(pattern.test('baan')); // Output: true
console.log(pattern.test('bn')); // Output: false

// flags
let pattern = /hello/gi;
let text = 'Hello World, hello Universe!';
console.log(text.match(pattern)); // Output: ['Hello', 'hello']


